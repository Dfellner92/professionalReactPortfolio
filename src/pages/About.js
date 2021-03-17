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
                    Entry-level Web Developer pursuing a role in back-end development.
                    I plan to approach a position the same way I performed in my cohort:
                    listening to the voices of collaborators and instructors, 
                    carefully reviewing materials, 
                    and taking the time to make sure people understand me.
                  </p>
                  <p>
                    I've built apps with only client-side code,
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
