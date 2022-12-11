import React from 'react'
import { Content } from '../../Components/Content/Content'
import { Row, Col } from 'react-bootstrap'
import './Home.css'
import myImage from '../../Assets/selfie.jpg'

export const Home = () => {
  return (
    <>
      <div className='row-box'>
        <Row>
          <Col md={4}>
            <div className='center'>
              <img src={myImage} alt='Avatar' />
            </div>
          </Col>
          <Col md={8}>
            <Content title='Welcome!'>
              {
                "Hiya, I'm Jessica. I am currently a graduate software engineer employed at BJSS, I have achieved a first class honours in Computer Science at the University of South Wales."
              }
            </Content>
          </Col>
        </Row>
      </div>

      <Content title='Website Disclaimer'>
        {`You may find some content on this website yet to be fully completed or writtien. 
                     Any faults found, which isn't due to the lack of content please let me known via the "Contact me" page. Thank you`}
      </Content>
      <Content title='History'>
        {`My involvement with computer developed at a young age with my parents handing down a shared laptop between my brother. I loved tinkering with this laptop, which for better or worse, always meant me breaking this poor laptop continuously or infecting with virus.
                     I loved trying to understand the inner workings of this computer. My parent always encouraged and engaged with my excitement with computers and pushed me to take ICT as GCSE option and then again as my focus at college, and then again with my focus at university.
                     While most of my younger years more involved with my taking computers and other electronics apart to learn what logic boards or other hardware was inside, my later years with engulfed with learning how to make these machines do my bidding.`}
        <br />
        <br />
        {`A long path later I have finally graduated with honours with a computer science degree and am now employed as a software engineer; my personal projects will never end.`}
      </Content>

      <Content title='Next Projects'>
        {`Having started done plenty of personal projects in artifical intelligence and embedded systems I want to create my own personal system - both software and hardware. Along side this project I have started work on more robotic projects.`}
      </Content>
    </>
  )
}
