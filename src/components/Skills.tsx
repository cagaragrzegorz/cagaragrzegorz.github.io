import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export const Skills: React.FC = () => {
    return (
        <div id="skills" className="navSection section lb">
            <Container>
                <Row>
                    <h3>Tech skills</h3>
                    <p>Skill 1 - 75%</p>
                </Row>
            </Container>
        </div>
    )
}
