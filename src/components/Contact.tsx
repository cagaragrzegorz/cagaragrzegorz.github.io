import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const Contact: React.FC = () => {
    return (
        <div id="contact" className="navSection section lb">
        <Container>
            <Row>
                <h3>Contact</h3>
                <p>
                    Email: grzgorzcagara@gmail.com
                    <br />
                    LI:
                    <a href="https://www.linkedin.com/in/grzegorz-cagara/">
                        https://www.linkedin.com/in/grzegorz-cagara/
                    </a>
                </p>
            </Row>
        </Container>
    </div>
    )
}
