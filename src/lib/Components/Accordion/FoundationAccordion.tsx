import './Accodion.css'
import { AccordionData } from '../../Types/AccordionData'
import { GenericAccordion } from './GenericAccordion'
import { Download } from '../Download/Download'

const data: AccordionData[] = [
  {
    title: 'Cyber Security and Forensic',
    content: (
      <div className='found-cont'>
        <h4>Topics Discussed</h4>
        <p>
          <ul className='Found-list'>
            <li>Threats that can be presented to an organisation or individual </li>
            <li>Threat actors, such as state or insider </li>
            <li>Different malware and viruses</li>
            <li>Methods to negate such attacks or actors </li>
            <li>Different encryption types and ways to decrypt </li>
          </ul>
        </p>
        <h4>Assessments</h4>
        <p className='text'>
          During the module I was required to complete 4 different practical / research exams, these
          were to test our knowledge and to test our ability to effectively utilise this knowledge
          to solve questions or decrypt the answer. While this method of assessment held 40% of the
          overall mark the other 60% came from a 1500-word report (10% +-) where I was required to
          lay out a threat landscape to an organisation. This report was to include major and small
          threats to this company with ways to mitigate against these threats.
        </p>
        <Download source='tes' title='test' desc='Report' />
      </div>
    ),
  },
  {
    title: 'Software Development Fundermentals',
    content: (
      <div className='found-cont'>
        <h4>Overview</h4>
        <p className='text'>
          The purpose of this module was an introduction to object-oriented programming using C#.
          The beginning of the module began with very basic teaching of how to set up a procedural
          project with no functions. The module then proceeded to teach the use of data types and
          functions. Software development was used to only teach the fundamentals of OOP languages,
          yet we did not touch upon polymorphism or recursion.
        </p>
        <h4>First Assessment</h4>
        <p className='text'>
          The requirements of this assignment was to construct a game with similar rule set to the
          game Hammurabi. I wrote a post nuclear apocalyptic Hammurabi clone, which I named
          Survivors. Concepts of Survivors:
        </p>
        <ul className='Needed-list'>
          <li>Resources replace grain</li>
          <li>
            At the beginning of each day you must decide how much resources to feed the population.
            Feeding too little will cause people to die by the next day, overfeeding does little to
            nothing
          </li>
          <li>
            To gather resource you can send people out to gather resources in teams of 2. Sending
            out will result in random resources being found, or even more people being found.
            However, you risk losing resources or people doing so
          </li>
          <li>If no people remain in the camp then game is over</li>
          <li>
            You can build radiation kits, these will cure all radiation a person has. A random event
            can happen which can kill a percentage of the population unless they are given radiation
            kits
          </li>
          <li>If you survive 10 days then everyone alive will be rescued and the game will end</li>
        </ul>
        <Download source='tes' title='test' desc='Survivors' />
        <Download source='tes' title='test' desc='Docs' />
        <h4>Second Assessment</h4>
        <p className='text'>
          My second assigment for the module requirements were to make a make a connect four game
          using windows forms as the graphical interface. For this assignment I gained 82%, only
          dropping marks for missing out additional features. The main additional feature that I
          left out of the project was to allow to play against the computer. The small feature that
          I left out was an animation to show the tile dropping.
        </p>
      </div>
    ),
  },

  {
    title: 'Website Development',
    content: (
      <div className='found-cont'>
        <h4>Topics Discussed</h4>
        <ul className='Found-list'>
          <li>Human-centered web development </li>
          <li>Multimedia communications </li>
          <li>Navigation</li>
          <li>Information architecture </li>
          <li>Evaluation </li>
          <li>HTML & CSS </li>
          <li>Responsive frameworks </li>
          <li>Sound and audio </li>
          <li>Basic animations </li>
          <li>Dynamic websites / Javascript and API’s </li>
        </ul>
        <h4>First Assessment</h4>
        <p className='text'>
          The first assignement required us to make to make a website design for a leisure centre.
          We were given a scenario where we had to create a design with personas and wireframes to
          design a potential website.
        </p>
        <Download source='tes' title='test' desc='Docs' />
        <h4>Secend Assessment</h4>
        <p className='text'>
          For the second assignment we had to develop a responsive website based on our designs from
          the first assignment. The hosting for this website is no longer available, but the report
          I developed is still available for download.
        </p>
        <Download source='tes' title='test' desc='Docs' />
      </div>
    ),
  },

  {
    title: 'Integrated Computing',
    content: (
      <div className='found-cont'>
        <h4>Topics Discussed</h4>
        <ul className='Found-list'>
          <li>Introduction to Linux </li>
          <li>Introduction to Python and Raspberry Pi </li>
          <li>GPIO</li>
          <li>OOP Concepts </li>
          <li>Web Server </li>
        </ul>
        <h4>First Assessment</h4>
        <p className='text'>
          For the first assignment we were required to write a Python program that could run a
          simple dice game and show the dice roll on LEDs controlled by GPIO pins.
        </p>
        <Download source='tes' title='test' desc='Docs' />
        <h4>Secend Assessment</h4>
        <p className='text'>
          For the second assignment we were required to write a basic HTML locally run website that
          had buttons which controlled GPIO LEDs with signals being sent from a different computer.
        </p>
        <Download source='tes' title='test' desc='Docs' />
      </div>
    ),
  },

  {
    title: 'Information Systems',
    content: (
      <div className='found-cont'>
        <h4>Topics Discussed</h4>
        <ul className='Found-list'>
          <li>Entities and attributes </li>
          <li>Different types of relationships </li>
          <li>Link entities</li>
          <li>Basic SQL </li>
          <li>Entity relationship diagrams </li>
          <li>Use of Access</li>
        </ul>
        <h4>First Assessment</h4>
        <p className='text'>
          For the first assignment I had to make an entity relationship diagram for a police system.
          Then generate an Access database from the entity relationship diagram.
        </p>
        <Download source='tes' title='test' desc='Docs' />
        <h4>Secend Assessment</h4>
        <p className='text'>
          {`For this module I was required to design and implements a basic GIS system. 
          I was required to get police data for crimes in my local area and create various maps (Heat maps) to highlight certain crimes, and crime trends presented in the data. 
          I was required to submit a PowerPoint which reported on the maps and all analysis`}
        </p>
        <Download source='tes' title='test' desc='Docs' />
      </div>
    ),
  },
]

export const FoundationAccordion = () => {
  return <GenericAccordion data={data} />
}
