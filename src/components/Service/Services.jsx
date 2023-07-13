import React from "react";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";


const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What have I learned</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={<i className="fab fa-react"></i>}
            title={"React JS"}
            disc={``}
          />
        </Slide>
        <Slide direction="left">
          <Card
            Icon={<i className="fab fa-react"></i>}
            title={"React Native"}
            disc={``}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={<i className="fab fa-laravel"></i>}
            title={"Laravel"}
            disc={``}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={<i className="fab fa-vuejs"></i>}
            title={"Vue JS"}
            disc={``}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
