import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>About Me</h2>
            <Row>
              <Col size="sm-12">
                <img
                  className="img-fluid profile-pic float-left"
                  src={require("../components/assets/images/ProfilePic.jpg")}
                  alt="Me and doggo!"
                />
                <div className="bio">
                  <p>
                    I am a student studying full-stack web development at Rutgers
                    Coding Bootcamp. Here, I've learned that being a successful web 
                    developer includes not just mastering technical skills, but
                    also having a patient mindset. Listening to the voices 
                    of collaborators and instructors, reviewing class materials, 
                    and being able to explain myself when I have something to 
                    contribute or ask a question have led me to excel in understanding 
                    the course materials.
                  </p>
                  <p>
                    Now I can confidently build apps with only client-side code,
                    with node/express server bases, and with React engines. Please,
                    navigate to the portfolio page to see demonstrations.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default About;
