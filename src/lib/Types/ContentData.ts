import { StringifyOptions } from 'querystring'
import React from 'react'
import { download } from './download'

export type ContentData = {
  title: String
  content: InnerContent[]
  buttons?: download[]
  special?: React.ReactNode
}

type InnerContent = {
  title?: string
  content?: string
  bullets?: string[]
  buttons?: download[]
}
