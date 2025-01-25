import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const Footer: React.FC = () => {
    return (
        <div className="copyrights">
            <Container>
                <Row>
                    <div className="footer-distributed">
                        <p>All Rights Reserved. &copy; 2024 Grzegorz Cagara.</p>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
