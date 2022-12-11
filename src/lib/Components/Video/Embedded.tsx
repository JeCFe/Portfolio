import React from 'react'
import './Embedded.css'

interface props {
  width: string
  height: string
  title: string
  source: string
}

export const Embedded = (props: props) => {
  const { source, title, width, height } = props
  return (
    <div className='video-responsive'>
      <iframe
        width={width}
        height={height}
        src={source}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        title={title}
      ></iframe>
    </div>
  )
}
