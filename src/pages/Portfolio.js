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
                imgPath={require("../components/assets/images/passwordGenerator.png")}
                linkDeployed="https://dfellner92.github.io/passwordGenerator/"
                linkGithub="https://github.com/dfellner92/passwordGenerator"
              />
              <Project
                name="Weather Dashboard"
                imgPath={require("../components/assets/images/weatherDashboard.png")}
                linkDeployed="https://dfellner92.github.io/weatherDashboard/"
                linkGithub="https://github.com/dfellner92/weatherDashboard"
              />
              <Project
                name="Itinerary Maker"
                imgPath={require("../components/assets/images/ItineraryPlanner.png")}
                linkDeployed="https://dfellner92.github.io/project1personal//"
                linkGithub="https://github.com/dfellner92/project1personal"
              />
            </Row>
            <Row>
              <Project
                name="Burger Eater"
                imgPath={require("../components/assets/images/BurgerEater.png")}
                linkDeployed="https://burger-eat-mysql.herokuapp.com/"
                linkGithub="https://github.com/jenjch/burgerMySql"
              />
              <Project
                name="User Directory"
                imgPath={require("../components/assets/images/userDirectory.png")}
                linkDeployed="https://employee-tracker-dfellner.herokuapp.com/"
                linkGithub="https://github.com/dfellner92/EmployeeTracker"
              />
              <Project
                name="Google Books Search"
                imgPath={require("../components/assets/images/GoogleBooks.png")}
                linkDeployed="https://google-book-search-dfellner.herokuapp.com/"
                linkGithub="https://github.com/Dfellner92/googleBooksSearch"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
