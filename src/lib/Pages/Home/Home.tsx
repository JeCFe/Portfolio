import React from 'react'
import { Content } from '../../Components/Content/Content'
import { Row, Col } from 'react-bootstrap'
import './Home.css'
import myImage from '../../Assets/selfie.jpg'
import { ContentData } from '../../Types/ContentData'
import { RenderError } from '../../Error/RenderError'
import pageContentJson from './content.json'

let welcomeContent: ContentData = { title: '', content: [{}] }

const pageContent: ContentData[] = pageContentJson
console.log(pageContent.length)
if (pageContent.length > 0) {
  welcomeContent = pageContent.shift() as ContentData
}

export const Home = () => {
  if (pageContent.length > 0) {
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
              <Content content={welcomeContent}></Content>
            </Col>
          </Row>
        </div>
        {pageContent.map((item, index) => {
          return <Content key={index} content={item} />
        })}
      </>
    )
  } else {
    return <RenderError />
  }
}
