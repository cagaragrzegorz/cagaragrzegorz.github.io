import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import './css/responsive.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { Navigation } from './components/Navigation'
import { Banner } from './components/Banner'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Banner />
            <AboutMe />
            <Contact />
            <Footer />

            <a href="#home" id="scroll-to-top" className="dmtop">
                <FontAwesomeIcon icon={faAngleUp} />
            </a>
        </div>
    )
}

export default App
