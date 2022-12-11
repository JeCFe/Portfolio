import React from 'react'
import { Content } from '../../Components/Content/Content'
import { Embedded } from '../../Components/Video/Embedded'
import pageContentJson from './content.json'

export const College = () => {
  return (
    <>
      <Content title='My College Experience'>
        {`My time at college I completed a year of AS level Physics and 2 years of A Level Computer Science and A Level Use Of Maths.`}
        <br />
        <br />
        {`During the duration of my computer science course I was required to complete a year long project. 
            This project could be based to any criteria as long as we used an object-oriented language and approach to create the solution providing a report and solution as the final product. 
            Doing this project, I developed a solar system simulator using C#.`}
        <br />
        <br />
        {`This project was the first lengthy project that I had undertaken in programming, facing many hurdles and new ideas to overcome. 
            At the time I was happy with the final solution I created, I can now look back at this solution to see methods in which the code can be improved to function more optionally and where features can be further developed.`}
      </Content>

      <Content title='Very Early Work'>
        {`Below is a video of the project I developed during my last year at college. Looking back at this work it amazes me the progress I've made since, I can see clear faults and better practices.
            I find it funny being able to look back at work that I developed in the early days as it provides a contrast to how far I've come`}
      </Content>

      <Embedded
        title='College Projcet'
        width='315'
        height='560'
        source='https://www.youtube.com/embed/OPZOq21euOo'
      />
    </>
  )
}
