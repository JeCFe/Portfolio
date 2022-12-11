import React from 'react'
import { download } from '../../Types/download'
import { Download } from '../Download/Download'
import './Content.css'
interface props {
  title?: string
  children?: React.ReactNode
  buttons?: download[]
}

export const Content = (props: props) => {
  const { title, children, buttons } = props
  const displayButtons: React.ReactElement[] = []

  buttons?.forEach((button) => {
    displayButtons.push(<Download title={button.title} source={button.url} desc={button.desc} />)
  })

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
