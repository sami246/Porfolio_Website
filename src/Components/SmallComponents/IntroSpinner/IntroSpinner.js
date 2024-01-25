import React from 'react'
import './IntroSpinner.css'

export const IntroSpinner = () => {
    return (
        <main class="intro-spinner-container">
            <p>Hello 👋 I'm</p>
            <div className='spinner-container'>
                <section class="animation">
                    <div class="first"><div className='box'>Sami Rahman</div></div>
                    <div class="second"><div className='box'>A Software Developer</div></div>
                    <div class="third"><div className='box'>Looking for Work</div></div>
                </section>
            </div>
        </main>
    )
}
