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
            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;hover!</h6>
            <Row>
              <Project
                name="Password Generator"
                imgPath={require("../components/assets/images/passwordGenerator.png")}
                linkDeployed="https://dfellner92.github.io/passwordGenerator/"
                linkGithub="https://github.com/dfellner92/passwordGenerator"
                summary="
                        Generates a password based on user selected bools. User is 
                        restricted to choose at least one array (uppercase, lowercase, 
                        numbers, and special characters) and have the password length 
                        between 8 and 144 characters.
                "
                skillsUsed="HTML, CSS, Javascript, Bootstrap, jQuery"
              />
              <Project
                name="Weather Dashboard"
                imgPath={require("../components/assets/images/weatherDashboard.png")}
                linkDeployed="https://dfellner92.github.io/weatherDashboard/"
                linkGithub="https://github.com/dfellner92/weatherDashboard"
                summary="The user can search for the current and 5 day forecast 
                        for cities using the Open Weather API. Upon refreshing the app, 
                        the user is shown the current and 5 day forecast of the last search.
                "
                skillsUsed="HTML, CSS, Jquery, AJAX call to 3rd Party API, Local Storage"
              />
              <Project
                name="Itinerary Maker"
                imgPath={require("../components/assets/images/ItineraryPlanner.png")}
                linkDeployed="https://dfellner92.github.io/project1personal//"
                linkGithub="https://github.com/dfellner92/project1personal"
                summary="Reveals nearby hotspots based off the weather. The search sends 
                two queries: data received by the Google Places API is filtered by the 
                result of the query to the OpenWeather API, which requests the current 
                outdoor conditions.
                "
                skillsUsed="HTML, CSS, jQuery, Bootstrap, Use of Multiple 3rd Party APIs"
              />
            </Row>
            <Row>
              <Project
                name="Burger Eater"
                imgPath={require("../components/assets/images/BurgerEater.png")}
                linkDeployed="https://burger-eat-mysql.herokuapp.com/"
                linkGithub="https://github.com/jenjch/burgerMySql"
                summary="A simple MVC app that allows for CRUD functionality. Users 
                        can 'make' a burger, 'eat' (update) it, and delete it.
                "
                skillsUsed="Node.js, Express.js, MySQL, Sequelize, MVC formatting"
              />
              <Project
                name="User Directory"
                imgPath={require("../components/assets/images/userDirectory.png")}
                linkDeployed="https://employee-tracker-dfellner.herokuapp.com/"
                linkGithub="https://github.com/dfellner92/EmployeeTracker"
                summary="
                          A front-end React App meant to sort data. Sort, filter,
                          and search capabilities are displayed
                "
                skillsUsed="Bootstrap, 3rd Party API, Local Storage, search algorithms, React"
              />
              <Project
                name="Google Books Search"
                imgPath={require("../components/assets/images/GoogleBooks.png")}
                linkDeployed="https://google-book-search-dfellner.herokuapp.com/"
                linkGithub="https://github.com/Dfellner92/googleBooksSearch"
                summary="
                          A simple MERN app that accesses the Google Books API and
                          then creates data which can be updated and deleted
                "
                skillsUsed="MongoDB, Express, React, Node.js, Bootstrap"
              />
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
