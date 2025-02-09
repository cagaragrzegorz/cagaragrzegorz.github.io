import React from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Menu } from 'lucide-react'

export const Navigation: React.FC = () => {
    return (
        <Navbar collapseOnSelect expand="lg" data-bs-theme="dark" style={{ backgroundColor: '#333333' }} fixed="top">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: '0', boxShadow: 'none' }}>
                    <Menu size={28} color={'white'} />
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" data-id={'home'} className="active">
                            HOME
                        </Nav.Link>
                        <Nav.Link href="#about" data-id={'about'}>
                            ABOUT
                        </Nav.Link>
                        <Nav.Link href="#experience" data-id={'experience'}>
                            EXPERIENCE
                        </Nav.Link>
                        <Nav.Link href="#skills" data-id={'skills'}>
                            SKILLS
                        </Nav.Link>
                        <Nav.Link href="#contact" data-id={'contact'}>
                            CONTACT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
