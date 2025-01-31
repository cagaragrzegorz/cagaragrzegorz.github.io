import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/style.css'
import './css/responsive.css'
import { Navigation } from './components/Navigation'
import { Banner } from './components/Banner'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Experience } from './components/Experience'
import { ChevronUp } from 'lucide-react'

function App() {
    return (
        <div className="App">
            <Navigation />
            <Banner />
            <AboutMe />
            <Experience />
            {/*<Skills />*/}
            <Contact />
            <Footer />

            <a href="#home" id="scroll-to-top" className="dmtop">
                <ChevronUp size={38} />
            </a>
        </div>
    )
}

export default App
