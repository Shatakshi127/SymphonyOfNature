import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Member Roles</h2>
                  <div>
                    <h3>Cheshta Arora</h3>
                    <p>Creating Documentation Website</p>
                    <p>Story Board Design</p>
                    <p>Extraction of frames from GIFs</p>
                    <p>Animating objects (Sun, Boat, People, Water, Clouds)</p>
                    <p>Integrating functionalities</p>
                    <p>Implement clicking  functionality to make sound interactive on clicking canvas.</p>
                  </div>
                  <div>
                    <h3>Shatakshi Saxena</h3>
                    <p>Creating Documentation Website</p>
                    <p>Story Board Design</p>
                    <p>UI fixes and designing the Website</p>
                    <p>Animating objects (Moon, Bird, Sunflower, Land)</p>
                    <p>Integrating sounds and music functionality</p>
                    <p>Website Deployment</p>
                  </div>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
