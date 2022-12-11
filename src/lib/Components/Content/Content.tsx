import React from 'react'
import { isTemplateSpan } from 'typescript'
import { ContentData } from '../../Types/ContentData'
import { download } from '../../Types/download'
import { Download } from '../Download/Download'
import './Content.css'
interface props {
  title?: string
  children?: React.ReactNode
  buttons?: download[]
  special?: React.ReactNode
  content?: ContentData
}

export const Content = (props: props) => {
  const { title, children, buttons, content, special } = props
  const displayButtons: React.ReactElement[] = []

  buttons?.forEach((button) => {
    displayButtons.push(<Download title={button.title} source={button.url} desc={button.desc} />)
  })

  if (content) {
    return (
      <div className='center content-wrapper'>
        <div className='text-box'>
          <>
            {content.title.length > 0 && <h2>{content.title}</h2>}
            {content.content.map((item, index) => {
              return (
                <div className='InnerContent' key={index}>
                  {item.title && <h4 className='InnerHeader'>{item.title}</h4>}
                  {item.content && <p className='text'>{item.content}</p>}
                  {item.bullets && (
                    <ul className='Found-list'>
                      {item.bullets.map((item, index) => {
                        return <li key={index}>{item}</li>
                      })}
                    </ul>
                  )}
                  {item.buttons &&
                    item.buttons.map((item, index) => {
                      return (
                        <Download
                          key={index}
                          title={item.title}
                          source={item.url}
                          desc={item.desc}
                        />
                      )
                    })}
                </div>
              )
            })}
            {content.special && content.special}
            {content.buttons &&
              content.buttons.map((item, index) => {
                return (
                  <div key={index} className={'InnerContent'}>
                    <Download title={item.title} source={item.url} desc={item.desc} />
                  </div>
                )
              })}
          </>
        </div>
      </div>
    )
  } else {
    return (
      <div className='center content-wrapper'>
        <div className='text-box'>
          <h2>{title}</h2>
          {children}
          {displayButtons.map((item, i) => {
            return <div key={i}>{item}</div>
          })}
        </div>
      </div>
    )
  }
}
