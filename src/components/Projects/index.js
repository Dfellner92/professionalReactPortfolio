import React from "react";
import Col from "../Col";
import "./styles.css";

function Project(props) {

    console.log("image", props.imgPath);
  return (
    <Col size="md-4 sm-12">
      <div className="button-container">
        <div className="fade-container">
          <img
            className="img-fluid portfolio-pic"
            src={props.imgPath}
            alt={props.name}
          />
          <div class="middle">
            <div class="text">{props.summary}</div>
            <br/>
            <div class="text">{props.skillsUsed}</div>
          </div>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block deployedBtn"
          onClick={() => window.open(props.linkDeployed)}
        >
          {props.name} (Deployed)
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-block githubBtn"
          onClick={() => window.open(props.linkGithub)}
        >
          {props.name} (Github)
        </button>
      </div>
    </Col>
  );
}

export default Project;
