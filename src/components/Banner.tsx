import React from 'react'

export const Banner: React.FC = () => {
    return (
        <div id="home" className="main-banner navSection">
            <div className="heading">
                <h1>hello i'm Grzegorz</h1>
                <h3 className="cd-headline clip">
                    <span>I specialize in:&nbsp;</span>
                    <span className="cd-words-wrapper">
                        <b className="is-visible">FE Testing</b>
                        <b>BE Testing</b>
                        <b>API Testing</b>
                        <b>Perf Testing</b>
                        <b>Building testing frameworks</b>
                        <b>Building utitilies / tools</b>
                        <b>Mentoring and teaching</b>
                    </span>
                </h3>
            </div>
        </div>
    )
}
