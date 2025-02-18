import $ from 'jquery'
// animating what I specialize in
$(document).ready(function ($):void {
    //set animation timing
    const animationDelay: number = 500,
        //loading bar effect
        barAnimationDelay: number  = 1800,
        barWaiting: number  = barAnimationDelay - 1000, //1000 is the duration of the transition on the loading bar - set in the scss/css file
        //letters effect
        lettersDelay: number  = 50,
        //type effect
        typeLettersDelay: number  = 150,
        selectionDuration: number  = 500,
        typeAnimationDelay: number  = selectionDuration + 800,
        //clip effect
        revealDuration: number  = 600,
        revealAnimationDelay: number = 1500

    initHeadline()

    function initHeadline():void {
        //insert <i> element for each letter of a changing word
        singleLetters($('.cd-headline.letters').find('b'))
        //initialise headline animation
        animateHeadline($('.cd-headline'))
    }

    function singleLetters($words: JQuery): void {
        $words.each(function () {
            let word = $(this),
                letters = word.text().split(''),
                selected = word.hasClass('is-visible')
            for (let i in letters) {
                if (word.parents('.rotate-2').length > 0) letters[i] = '<em>' + letters[i] + '</em>'
                letters[i] = selected ? '<i class="in">' + letters[i] + '</i>' : '<i>' + letters[i] + '</i>'
            }
            const newLetters = letters.join('')
            word.html(newLetters).css('opacity', 1)
        })
    }

    function animateHeadline($headlines: JQuery) {
        let duration = animationDelay
        $headlines.each(function () {
            const headline = $(this)

            if (headline.hasClass('loading-bar')) {
                duration = barAnimationDelay
                setTimeout(function () {
                    headline.find('.cd-words-wrapper').addClass('is-loading')
                }, barWaiting)
            } else if (headline.hasClass('clip')) {
                let spanWrapper = headline.find('.cd-words-wrapper'),
                    newWidth = spanWrapper.width()! + 10
                spanWrapper.css('width', newWidth)
            } else if (!headline.hasClass('type')) {
                //assign to .cd-words-wrapper the width of its longest word
                const words = headline.find('.cd-words-wrapper b')
                let width = 0
                words.each(function () {
                    const wordWidth: number = $(this).width()!
                    if (wordWidth! > width) width! = wordWidth
                })
                headline.find('.cd-words-wrapper').css('width', width)
            }

            //trigger animation
            setTimeout(function () {
                hideWord(headline.find('.is-visible').eq(0))
            }, duration)
        })
    }

    function hideWord($word: JQuery) {
        const nextWord = takeNext($word)

        if ($word.parents('.cd-headline').hasClass('type')) {
            const parentSpan = $word.parent('.cd-words-wrapper')
            parentSpan.addClass('selected').removeClass('waiting')
            setTimeout(function () {
                parentSpan.removeClass('selected')
                $word.removeClass('is-visible').addClass('is-hidden').children('i').removeClass('in').addClass('out')
            }, selectionDuration)
            setTimeout(function () {
                showWord(nextWord, typeLettersDelay)
            }, typeAnimationDelay)
        } else if ($word.parents('.cd-headline').hasClass('letters')) {
            const bool = $word.children('i').length >= nextWord.children('i').length
            hideLetter($word.find('i').eq(0), $word, bool, lettersDelay)
            showLetter(nextWord.find('i').eq(0), nextWord, bool, lettersDelay)
        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({ width: '2px' }, revealDuration, function () {
                switchWord($word, nextWord)
                showWord(nextWord, undefined)
            })
        } else if ($word.parents('.cd-headline').hasClass('loading-bar')) {
            $word.parents('.cd-words-wrapper').removeClass('is-loading')
            switchWord($word, nextWord)
            setTimeout(function () {
                hideWord(nextWord)
            }, barAnimationDelay)
            setTimeout(function () {
                $word.parents('.cd-words-wrapper').addClass('is-loading')
            }, barWaiting)
        } else {
            switchWord($word, nextWord)
            setTimeout(function () {
                hideWord(nextWord)
            }, animationDelay)
        }
    }

    function showWord($word: JQuery, $duration: number | undefined) {
        if ($word.parents('.cd-headline').hasClass('type')) {
            showLetter($word.find('i').eq(0), $word, false, $duration)
            $word.addClass('is-visible').removeClass('is-hidden')
        } else if ($word.parents('.cd-headline').hasClass('clip')) {
            $word.parents('.cd-words-wrapper').animate({ width: $word.width()! + 10 }, revealDuration, function () {
                setTimeout(function () {
                    hideWord($word)
                }, revealAnimationDelay)
            })
        }
    }

    function hideLetter(
        $letter: JQuery,
        $word: JQuery,
        $bool: boolean,
        $duration: number | undefined
    ) {
        $letter.removeClass('in').addClass('out')

        if (!$letter.is(':last-child')) {
            setTimeout(function () {
                hideLetter($letter.next(), $word, $bool, $duration)
            }, $duration)
        } else if ($bool) {
            setTimeout(function () {
                hideWord(takeNext($word))
            }, animationDelay)
        }

        if ($letter.is(':last-child') && $('html').hasClass('no-cssTransitions')) {
            const nextWord = takeNext($word)
            switchWord($word, nextWord)
        }
    }

    function showLetter(
        $letter: JQuery,
        $word: JQuery,
        $bool: boolean,
        $duration: number | undefined
    ) {
        $letter.addClass('in').removeClass('out')

        if (!$letter.is(':last-child')) {
            setTimeout(function () {
                showLetter($letter.next(), $word, $bool, $duration)
            }, $duration)
        } else {
            if ($word.parents('.cd-headline').hasClass('type')) {
                setTimeout(function () {
                    $word.parents('.cd-words-wrapper').addClass('waiting')
                }, 200)
            }
            if (!$bool) {
                setTimeout(function () {
                    hideWord($word)
                }, animationDelay)
            }
        }
    }

    function takeNext($word: JQuery) {
        return !$word.is(':last-child') ? $word.next() : $word.parent().children().eq(0)
    }

    function switchWord($oldWord: JQuery, $newWord: JQuery) {
        $oldWord.removeClass('is-visible').addClass('is-hidden')
        $newWord.removeClass('is-hidden').addClass('is-visible')
    }
})
