import React from 'react'
import { FoundationAccordion } from '../../Components/Accordion/FoundationAccordion'
import { Content } from '../../Components/Content/Content'
import './University.css'
import pageContentJson from './content.json'
import { ContentData } from '../../Types/ContentData'

const specialMap = new Map<string, React.ReactNode>()
specialMap.set('Foundation Year', <FoundationAccordion />)

export const University = () => {
  const pageContent: ContentData[] = pageContentJson

  specialMap.forEach((value, key) => {
    pageContent[pageContent.findIndex((item) => item.title.includes(key))].special = value
  })

  return (
    <>
      {pageContent.map((item, index) => {
        return <Content key={index} content={item} />
      })}
    </>
  )
}
