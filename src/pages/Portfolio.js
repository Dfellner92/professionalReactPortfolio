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
                name="Attendance Taker"
                imgPath={require("../components/assets/images/Registration.jpeg")}
                linkDeployed="https://attendance-project-dfellner.herokuapp.com"
                linkGithub="https://github.com/dfellner92/attendanceproject"
                summary="
                    A simple CRUD application written primarily in Javascript and PHP. 
                    Users can register, view, update and delete records from a remote 
                    MySQL database which uses PHP PDO for connectivity.  
                "
                skillsUsed="React Native, MongoDb, Node.js, Express.js, Bcrypt.js, .env, jsonwebtoken"
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
            </Row>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default Portfolio;
