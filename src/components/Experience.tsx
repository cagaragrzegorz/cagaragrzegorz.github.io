import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '../css/timeline.css'
import Col from 'react-bootstrap/Col'

export const Experience: React.FC = () => {
    return (
        <div id="experience" className="navSection section lb">
            <Container>
                <Row>
                    <Col md={12}>
                        <h3>Experience</h3>
                        <ul className="timeline">
                            <li className="event" data-dates="Jan 2023 - Present">
                                <h3>Fedex Dataworks Poland</h3>
                                <h6>Principal Quality Engineer</h6>
                                <p>
                                    Shoprunner was acquired by Fedex Dataworks. Building E2E testing framework form
                                    scratch (Playwright + TS). SDK tests. Recruitment and building QA team. Teaching and mentoring
                                    other testers. Building helpers and Website for project metrics and utilities.
                                </p>
                            </li>
                            <li className="event" data-dates="Feb 2022 - Dec 2022">
                                <h3>Shoprunner Poland</h3>
                                <h6>Lead QA Engineer</h6>
                                <p>
                                    Building QA related processes for number os Scrum teams for newly started project.
                                    Building E2E testing framework form scratch (Cypress + TS). Building Performance
                                    testing solution (Gatling + Java). Building CI pipelines in ADO. Building tools like
                                    data generators.
                                </p>
                            </li>
                            <li className="event" data-dates="Aug 2015 - Jan 2022">
                                <h3>Sabre Poland</h3>
                                <h6>Team Lead Software Quality Assurance Engineer</h6>
                                <p>
                                    Team Lead and Scrum Master for the Automation Team (Poland, USA and India).
                                    Recruiting. Creating E2E test platform in Groovy and Geb framework. Creating backend
                                    test at all test pyramid levels (but units). Creating other auxiliary solutions,
                                    automation and website. Architecting and implementing AWS integration for running
                                    top most level of UI tests for bunch of customer (airline) environments (with
                                    separate dataset) + reporting. Automating test environments deployment (TeamCity,
                                    Jenkins).
                                </p>
                            </li>
                            <li className="event" data-dates="Apr 2013 - Jul 2015">
                                <h3>Delphi Poland (Currently Aptiv)</h3>
                                <h6>Software System Test Engineer</h6>
                                <p>
                                    Performing functional and non-functional testing. Preparing test procedures and test
                                    methodology for project and product needs. Reporting and presenting results to
                                    customer (on-site presentations). Test automation (CAPL, TCL, internal tools).
                                    Developing of utility apps for test automation (Java). Elements of microcontroller
                                    programing (C).
                                </p>
                            </li>
                            <li className="event" data-dates="Aug 2011 - Mar 2013">
                                <h3>EC Project Sp. z o.o.</h3>
                                <h6>Automation / Vision Systems Engineer</h6>
                                <p>
                                    Selection of components and programming (Halcon, C# with integration of external
                                    libraries) for vision systems purpose. Testing and implementation of prepared
                                    solutions. Elements of project management including: customers consultation,
                                    requirements update, preparation of the offer, and final results presentation.
                                </p>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
