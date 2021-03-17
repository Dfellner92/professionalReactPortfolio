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
                  alt="Me"
                />
                <div className="bio">
                  <p>
                    I am a developer with experience building fullstack applications, but 
                    at this time, I am shifting my focus to pursuing a role in front-end 
                    development. I was voted "Most Determined" by my peers in Rutgers Coding
                    Bootcamp's class of September 2020 cohort, so I don't plan to stop trying to
                    find the right fit anytime soon!
                  </p>
                  <p>
                    I have familiarity with HTML/CSS, Javascript, React, Node.js, Express.js,
                    NoSQL databases like MongoDb, and SQL. Lately, I have been building projects
                    in PHP using a SQL remote server. Please, navigate to my portfolio section to 
                    view my work. 
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
