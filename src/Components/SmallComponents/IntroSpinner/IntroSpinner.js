import React from 'react'
import './IntroSpinner.css'

export const IntroSpinner = () => {
    return (
        <main className="intro-spinner-container">
            <p>Hello 👋 I'm</p>
            <div className='spinner-container'>
                <section className="animation">
                    <div className="first"><div className='box'>Sami Rahman</div></div>
                    <div className="second"><div className='box'>A Software Developer</div></div>
                    <div className="third"><div className='box'>Looking for Work</div></div>
                </section>
            </div>
        </main>
    )
}
