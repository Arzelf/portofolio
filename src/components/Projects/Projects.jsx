import React from 'react'
import styled from 'styled-components';
import SliderComp from './Slider';
import SliderComp2 from './Slider2';
import { Zoom } from 'react-awesome-reveal';
import { Col, Row, Button } from 'reactstrap';
import bpkp1 from "../images/bpkp/1.png"
import bpkp2 from "../images/bpkp/2.png"
import bpkp3 from "../images/bpkp/3.png"
import bpkp4 from "../images/bpkp/4.png"
import bpkp5 from "../images/bpkp/5.png"
import mnk1 from "../images/mnk/1.png"
import mnk2 from "../images/mnk/2.png"
import mnk3 from "../images/mnk/3.png"
import mnk4 from "../images/mnk/4.png"
import vue1 from "../images/vue/1.png"
import Swal from 'sweetalert2';

const Projects = () => {

    let data1 = [
    {
        img : bpkp1,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : bpkp2,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : bpkp3,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : bpkp4,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : bpkp5,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
    ];

    let data2 = [
    {
        img : mnk1,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : mnk2,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : mnk3,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : mnk4,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
    ];

    let data3 = [
    {
        img : vue1,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : vue1,
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
    ];
    

    const showAlert = () => {
    Swal.fire({
        title: "Sorry",
        text: "Due to the policy of the company, you cannot get access",
        icon: "warning",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close();
        }
      });
    };
    
  return (
    <Container id='project'>
        <Zoom>
            <h1>Recent <span className="green">Projects</span></h1>
        </Zoom>
        <Slide>
              <Row>
                <Col md={6}>
                      <SliderComp data={ data1} />
                </Col>
                <Col md={6}>
                    <div className="col-content">
                    <h5><span className="green">CAT-ASSESSMENT BPKP</span></h5>
                          <p>Create a website using assessment functionality provides a platform for conducting various types of assessments, evaluations, or tests. It enables users to create and administer assessments, as well as collect and analyze the results.</p>
                          <p>
                              Technology : <span className='green'>React Js, Laravel</span> <br/>
                              Type : <span className='green'>Job projects</span>
                          </p>
                          <Button
                              className="btn-bottom"
                          onClick={() => showAlert()}
                          >
                        <span className='green'><i className="fab fa-github"></i></span> Gitlab
                    </Button>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                    <SliderComp2 />
                </Col>
                <Col md={6}>
                    <div className="col-content">
                    <h5><span className="green">VORTIGERN STORE</span></h5>
                          <p>Build my own simple app to help make in-game item purchases. This application is still in the early stages of development</p>
                          <p>
                              Technology : <span className='green'>React Native</span> <br/>
                              Type : <span className='green'>Independent projects</span>
                          </p>
                    <Button className="btn-bottom" href="https://github.com/ArisFrsy/vortigern-store">
                        <span className='green'><i className="fab fa-github"></i></span> Github
                    </Button>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                      <SliderComp data={ data2} />
                </Col>
                <Col md={6}>
                    <div className="col-content">
                    <h5><span className="green">E-FORM MNK</span></h5>
                          <p>Developing an existing information system. Making feature improvements, adding features, and optimizing data management</p>
                          <p>
                              Technology : <span className='green'>Code Igniter 3</span> <br/>
                              Type : <span className='green'>Job projects</span>
                          </p>
                    <Button className="btn-bottom" onClick={() => showAlert()}>
                        <span className='green'><i className="fab fa-github"></i></span> Github
                    </Button>
                    </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                      <SliderComp data={ data3} />
                </Col>
                <Col md={6}>
                    <div className="col-content">
                    <h5><span className="green">CONTACT MANAGEMENT</span></h5>
                          <p>Create a simple project to learn basic Vue js fundamentals.</p>
                          <p>
                              Technology : <span className='green'>Vue JS</span> <br/>
                              Type : <span className='green'>Learning Project</span>
                          </p>
                    <Button className="btn-bottom" href="https://github.com/ArisFrsy/Vuejs-contact-management">
                        <span className='green'><i className="fab fa-github"></i></span> Github
                    </Button>
                    </div>
                </Col>
              </Row>
        </Slide>
    </Container>
  )
}

export default Projects;

const Container = styled.div`
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 0;
    text-align: center;
    position: relative;
    @media(max-width: 840px){
        width: 90%;
    }
    h1{
        font-size: 1.9rem;
    }
    h6{
        text-align: left;
        padding: 1rem 0;
    }

    p{
        width: 28rem;
        text-align: left;
        margin: 0 auto;
        padding: 1rem 0;
        font-size: 0.9rem;
        @media(max-width : 500px){
            width: 90%;
        }
    }
    Slide{
        item-align: center;
    }
    .col-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    }

    .btn-bottom {
    align-self: flex-end;
    }

    
`

const Slide = styled.div``