import React from 'react'
import { Content } from '../Components/Content/Content'
import { ContentData } from '../Types/ContentData'

export const RenderError = () => {
  const error: ContentData = {
    title: 'Render Error',
    content: [
      {
        content: `Sorry there has been an error retrieving and rendering the content for this page.\nPlease try again later, if this problem presists please contact the website admin `,
      },
    ],
  }

  return <Content content={error} />
}
