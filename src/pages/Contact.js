import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
// import Col from "../components/Col";

function ContactForm() {
  return (
    <Container>
      <section className="content">
        <Row>
          <div className="col-md-12 midsection">
            <h2>Contact</h2>
            <form>
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  placeholder="Jane Smith"
                />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form-group">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Write a message for Jen..."
                  rows="8"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </Row>
      </section>
    </Container>
  );
}

export default ContactForm;
