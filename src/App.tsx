import React, { useState } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "./css/responsive.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faBars } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [menuClasses, setMenuClasses] = useState<string>("topnav text-uppercase fixed-top")

  const toggleMenu = () => {

    if (menuClasses === "topnav text-uppercase fixed-top") {
      setMenuClasses('topnav text-uppercase fixed-top showMenu')
    } else {
      setMenuClasses('topnav text-uppercase fixed-top')
    }
  }
  
  return (
    <div className="App">
      <div id="myTopnav" className={menuClasses}>
        <div className="container">
          <div className="row burger">
            <a className="icon" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </a>
          </div>
          <div className="row menu">
            <a data-id="home" href="#home" className="active" onClick={toggleMenu}>
              Home
            </a>
            <a data-id="about" href="#about" onClick={toggleMenu}>
              About
            </a>
            <a data-id="contact" href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      </div>

      <section id="home" className="main-banner navSection">
        <div className="heading">
          <h1>hello i'm Grzegorz</h1>
          <h3 className="cd-headline clip">
            <span>I specialize in: </span>
            <span className="cd-words-wrapper">
              <b className="is-visible">FE Testing</b>
              <b>BE Testing</b>
              <b>API Testing</b>
              <b>Perf Testing</b>
              <b>Building testing frameworks</b>
              <b>Building utitilies / tools</b>
              <b>Mentoring and teaching</b>
            </span>
          </h3>
        </div>
      </section>

      <div id="about" className="navSection section wb">
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <h3>About me</h3>
              <p>
                I am a tester with over 13 years of international experience. I
                have been working as:
                <br />
                - BE tester building test solutions in JVM languages
                <br />
                - FE tester building solutions in GEB (Groovy), Cypress(TS) and
                currrently Playwirght(TS).
                <br />
                - Tech and QA team lead.
                <br />
                - Test solutions architect.
                <br />
              </p>
              <p>
                I have experinece with Performance testing - mainly Gatling.
              </p>
              <p>
                I have built CI and utilitiy jobs in tools like: TeamCity,
                Jenkins and ADO.
              </p>
              <p>
                I am big fan of building test tools and utilities that help
                teams to work smoother and bring transparency to the project -
                regarging test and quality status. That includes: websites, data
                generators, test env version managers, test and env status
                reporters, tools integrations to name few.
              </p>
              <p>
                I have been mentoring and teaching many testers along my career
                (mainly in English).
              </p>
            </Col>
            <Col md={6} sm={12} className="text-center">
              <img src={require("./images/ja.png")} />
            </Col>
          </Row>
        </Container>
      </div>

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

      <div className="copyrights">
        <Container>
          <Row>
            <div className="footer-distributed">
              <p>All Rights Reserved. &copy; 2024 Grzegorz Cagara.</p>
            </div>
          </Row>
        </Container>
      </div>

      <a href="#" id="scroll-to-top" className="dmtop">
        <FontAwesomeIcon icon={faAngleUp} />
      </a>
    </div>
  );
}

export default App;
