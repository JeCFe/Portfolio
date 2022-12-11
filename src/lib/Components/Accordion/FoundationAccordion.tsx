import './Accodion.css'
import { AccordionData } from '../../Types/AccordionData'
import { GenericAccordion } from './GenericAccordion'
import pageContentJson from './foundationContent.json'

const pageContent: AccordionData[] = pageContentJson

export const FoundationAccordion = () => {
  return <GenericAccordion data={pageContent} />
}
