import Accordion from 'react-bootstrap/Accordion'
import { AccordionData } from '../../Types/AccordionData'
import { Content } from '../Content/Content'
import './Accodion.css'
interface props {
  data: AccordionData[]
}
export const GenericAccordion = (props: props) => {
  const { data } = props

  return (
    <div className='center'>
      <div className='acc-cont'>
        <Accordion>
          {data.map((item, i) => {
            return (
              <Accordion.Item eventKey={i.toString()} key={i}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body className='acc-body'>
                  <Content content={item.content} />
                </Accordion.Body>
              </Accordion.Item>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
