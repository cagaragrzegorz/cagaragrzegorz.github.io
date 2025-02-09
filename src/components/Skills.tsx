import React, { useEffect, useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { ProgressBar } from 'react-bootstrap'
import '../css/skills.css'
import Col from 'react-bootstrap/Col'
import { skills } from './Skills.data'

export const Skills: React.FC = () => {
    const [isIntersecting, setIsIntersecting] = useState(false)
    const refContainer = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsIntersecting(entry.isIntersecting)
            },
            { rootMargin: '-100px' }
        )
        observer.observe(refContainer.current!)
        return () => observer.disconnect()
    }, [isIntersecting])

    return (
        <div id="skills" className="navSection section wb">
            <Container ref={refContainer}>
                <Row>
                    <h3>Tech skills</h3>
                    <Col md={6} className='col1'> {/*visible above 767 px display width*/}
                        {skills.map((skill, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <div className="skill" key={index}>
                                        {skill.name}
                                        <ProgressBar now={isIntersecting ? skill.value : 0} />
                                    </div>
                                )
                            }
                            return null
                        })}
                    </Col>
                    <Col md={6} className='col2'> {/*visible above 767 px display width*/}
                        {skills.map((skill, index) => {
                            if (index % 2 !== 0) {
                                return (
                                    <div className="skill" key={index}>
                                        {skill.name}
                                        <ProgressBar now={isIntersecting ? skill.value : 0} />
                                    </div>
                                )
                            }
                            return null
                        })}
                    </Col>
                    <Col sm={12} className='col3'> {/*visible below 767 px display width*/}
                        {skills.map((skill, index) => {
                            return (
                                <div className="skill" key={index}>
                                    {skill.name}
                                    <ProgressBar now={isIntersecting ? skill.value : 0} />
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
