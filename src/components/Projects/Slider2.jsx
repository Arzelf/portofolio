import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project2';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import vortigen5 from "../images/vortigen/1.jpg"
import vortigen4 from "../images/vortigen/2.jpg"
import vortigen3 from "../images/vortigen/3.jpg"
import vortigen2 from "../images/vortigen/4.jpg"
import vortigen1 from "../images/vortigen/5.jpg"

let data = [
    {
        img : vortigen1,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : vortigen2,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : vortigen3,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : vortigen4,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : vortigen5,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp2 = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp2;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`