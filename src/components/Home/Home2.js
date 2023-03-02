import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import {RiMailSendFill} from 'react-icons/ri'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Home2() {

    const form = useRef();
    const notify = () => toast.success("Thanks for contacting me",{theme:'dark'});
    const notifyIncomplete = () => toast.error("Check your mail again and send",{theme:'dark'});
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_s68ruw4', 'template_gkxwj0p', form.current, 'B9OL14UlOvDTkMDmG')
        .then((result) => {
            console.log(result.text,notify());
        }, (error) => {
            console.log(error.text,notifyIncomplete());
        });
    };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to <b className="purple">Automation.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Khalil-MF"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/khalilmoufadil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/khalil-moufadil/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:khaliloxmedia@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GiMailbox />
                </a>
              </li>
            </ul>
            <Col md={12} className="home-about-social" >
            <Form ref={form} onSubmit={sendEmail} >
            <Form.Group
                className="mb-3"
             
              >
                <Form.Label className="white">Your Name</Form.Label>
                <Form.Control type="text" name='user_name' required />
              </Form.Group>
              <Form.Group
                className="mb-3"
            
              >
                <Form.Label className="white">Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" name='user_email' required />
              </Form.Group>
              <Form.Group
                className="mb-3"
             
              >
                <Form.Label className="white" >Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} name='message' />
              </Form.Group>
              <Button variant="primary" type="submit">
                 SEND  <RiMailSendFill/>
              </Button>
              <ToastContainer />
            </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
