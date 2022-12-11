import React from 'react'

import './Download.css'

interface props {
  source: string
  title: string
  desc: string
}

export const Download = (props: props) => {
  const { source, title, desc } = props

  return (
    <a href={source} download={title} className='download-box'>
      <div className='download-link'>
        <div className='center'>
          <p className='download-text'>{desc}</p>
        </div>
      </div>
    </a>
  )
}
