import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const AboutMe: React.FC = () => {
    return (
        <div id="about" className="navSection section wb">
            <Container>
                <Row>
                    <Col md={6} sm={12}>
                        <h3>About me</h3>
                        <p>
                            I am a tester with over 13 years of international experience. I have been working as:
                            <br />
                            - BE tester building test solutions in JVM languages
                            <br />
                            - FE tester building solutions in GEB (Groovy), Cypress(TS) and currrently Playwirght(TS).
                            <br />
                            - Tech and QA team lead.
                            <br />
                            - Test solutions architect.
                            <br />
                        </p>
                        <p>I have experinece with Performance testing - mainly Gatling.</p>
                        <p>I have built CI and utilitiy jobs in tools like: TeamCity, Jenkins and ADO.</p>
                        <p>
                            I am big fan of building test tools and utilities that help teams to work smoother and bring
                            transparency to the project - regarging test and quality status. That includes: websites,
                            data generators, test env version managers, test and env status reporters, tools
                            integrations to name few.
                        </p>
                        <p>I have been mentoring and teaching many testers along my career (mainly in English).</p>
                    </Col>
                    <Col md={6} sm={12} className="image-container">
                        <img src={require('../images/ja.png')} alt="Grzegorz Cagara" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
