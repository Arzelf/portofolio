import React from "react";
import styled from "styled-components";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { Col, Row } from 'reactstrap';

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Portfolio</h1>
        </Slide>
        <Row>
          <Col xl={6}>
      <div className="address">
                <Slide direction="left">
                  <h1>Address:</h1>
                </Slide>
                <Slide direction="left">
                  <p>Wiyurejo, Pujon, Malang. (65391)</p>
                </Slide>
              </div>
          </Col>
          <Col xl={6}>
            <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+4733378901">+62 812 1678 9364</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:miladamiri@gmail.com">aris.it.dev@gmail.com</a>
            </Slide>
          </div>
        </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/ArisFrsy">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.linkedin.com/in/aris-firmansyah-89737a247/">
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a href="https://www.facebook.com/aris.firmansyah.7140">
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
          </Col>
        </Row>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
