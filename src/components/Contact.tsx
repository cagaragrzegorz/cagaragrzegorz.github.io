import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Github, Linkedin, Mail } from 'lucide-react'

export const Contact: React.FC = () => {
    return (
        <div id="contact" className="navSection section lb">
            <Container>
                <Row>
                    <h3>Contact</h3>
                    <div>
                        <Mail />&nbsp;grzgorzcagara@gmail.com
                    </div>
                    <div>
                        <Linkedin />&nbsp;
                        <a href="https://www.linkedin.com/in/grzegorz-cagara/" style={{textDecoration: 'none'}}>
                            https://www.linkedin.com/in/grzegorz-cagara/
                        </a>
                    </div>
                    <div>
                        <Github />&nbsp;
                        <a href="https://github.com/cagaragrzegorz" style={{textDecoration: 'none'}}>
                            https://github.com/cagaragrzegorz
                        </a>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
