import React from 'react';
import styled from 'styled-components';

const Project = (props) => {
  const { img } = props.item;
  return (
    <Container className='project'>
      <img src={img} alt="project" />
    </Container>
  );
}

export default Project;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
  background-color: #4e5156;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
    transition: transform 400ms ease-in-out;
  }

  .disc {
    position: center;
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
    transition: all 400ms ease-in-out;

    h1 {
      font-size: 1rem;
    }

    p {
      width: 90%;
      font-size: 0.8rem;

      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }

  :hover > img {
    transform: scale(2);
  }

  :hover > .disc {
    bottom: 0;
  }
`;
