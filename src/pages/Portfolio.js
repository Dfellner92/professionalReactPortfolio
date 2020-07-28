import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Project from "../components/Projects";


function Portfolio() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Portfolio</h2>
            <Row>
              <Project
                name="Password Generator"
                imgPath={require("../components/assets/images/pw-generator.png")}
                linkDeployed="https://jenjch.github.io/passwordGenerator/"
                linkGithub="https://github.com/jenjch/passwordGenerator"
              />
              <Project
                name="Weather Dashboard"
                imgPath={require("../components/assets/images/weather-app.PNG")}
                linkDeployed="https://dfellner92.github.io/weatherDashboard/"
                linkGithub="https://github.com/dfellner92/weatherDashboard"
              />
              <Project
                name="Movies & Groovies"
                imgPath={require("../components/assets/images/movie-app.PNG")}
                linkDeployed="https://jenjch.github.io/GroupProject1/"
                linkGithub="https://github.com/jenjch/GroupProject1"
              />
            </Row>
            <Row>
              <Project
                name="Note Taker"
                imgPath={require("../components/assets/images/note-taker2.PNG")}
                linkDeployed="https://notetaker-5123534.herokuapp.com/"
                linkGithub="https://github.com/jenjch/noteTaker"
              />
              <Project
                name="Banh Mi Log"
                imgPath={require("../components/assets/images/banhMi2.jpg")}
                linkDeployed="https://blooming-wildwood-86554.herokuapp.com/"
                linkGithub="https://github.com/jenjch/banhMiLog"
              />
              <Project
                name="Podcast Collection"
                imgPath={require("../components/assets/images/podcast-app.jpeg")}
                linkDeployed="https://project2-020420.herokuapp.com/"
                linkGithub="https://github.com/jenjch/project2"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
