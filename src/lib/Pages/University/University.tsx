import React from 'react'
import { FoundationAccordion } from '../../Components/Accordion/FoundationAccordion'
import { Content } from '../../Components/Content/Content'
import './University.css'

export const University = () => {
  return (
    <>
      <Content title='University Experience'>
        {`I am now in my final year at the University of South Wales studying computer science. I have studied at this university since my foundation year until now. Each year I have averaged a passing grade higher than 80%.`}
        <br />
        <br />
        {`University has allowed me to further develop my computer science knowledge and to become more confident in both my critical thinking and problem solving skills that are essential for programming. Onto of these skills’ university has given me the confidence to present works to my peers, to be confident in the final project I have developed, and to be able to take critical feedback onto how to improve my work in the future.`}
        <br />
        <br />
        {`At university I have had the opportunity to work in a team to develop a joint project, this required a refining of communication skills, along with leadership skills where to was required. I am much more confident in my ability to not only operate individually to achieve a task, but to allow collaborate with others to complete a task.`}
      </Content>

      <Content title='Foundation Year'>
        <p>
          My foundation year consisted of 5 modules. These modules covered the core fundamentals to
          be able to complete my computer science degree. Below is further details what each moduel
          covered in their material.
        </p>

        <FoundationAccordion />
      </Content>
    </>
  )
}
