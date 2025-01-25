import $ from 'jquery'
// add underlines to menu items while on specific section
$(window).on('scroll', function () {
    const position = $(this).scrollTop()! + 100 //position scrolled so far

    $('.navSection').each(function () {
        //checks for every element with .navSection class
        const target = $(this).offset()!.top //each element position from top
        const targetBot = target + $(this).height()! // + its height

        const id = $(this).attr('id')
        const element = $('.nav-link[data-id=' + id + ']')
        element.removeClass('active') //clear all
        if (position >= target && targetBot >= position) {
            element.addClass('active') //activate menu item of section I am scrolling over
        }
    })
})

// make scroll up box visible
$(window).on('scroll', function () {
    const position = $(this).scrollTop() //position scrolled so far

    if (position! > 100) {
        $('.dmtop').addClass('show')
    } else {
        $('.dmtop').removeClass('show')
    }
})
