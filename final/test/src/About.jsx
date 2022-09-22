
import { useState } from 'react';
import Accordion from './Accordion';
import './Style/About.css';
import save from './Style/images/save.jpeg';

const defaultFAQs = {
  'Importance of Saving Earth': `
  Our Earth is the only planet with the continuity of life so it becomes more and more important to generate a sense of urgency of saving our mother earth from all sorts of planet harming activities. Our mother earth needs to be saved as our survival depends completely on this planet. It is our responsibility to raise awareness about saving our mother earth.
  `,
  'Our Vision for Change': `
  We all are aware of the fact that this is the only planet where life is possible. It is the only home we all have and that is why it is highly important to take important measures to save this planet. It is time to part our ways from planet harming activities as for all generation to live a healthier life, it is important to save our planet. 
  People around the world should understand the need of a greener & cleaner planet. We all need to fulfill our responsibilities & make ample efforts to protect our mother earth from planet harming activities.
  ` ,
  'Things You Can Do to Help Protect the Earth':`
  There are many ways to save our planet including conserving water, reducing our use of oil and embracing green energy, reducing waste and single-use plastics and planting more trees. If you're looking for small ways that you can make a difference, search online for ideas of how to get started.`,

};

function About() {

  const [faqs] = useState(defaultFAQs);

  return (
    <body className='aboutus'>
    <div className="app">
        <h1 className='about'>About US</h1>
        <img src={save} alt='logo' className='save-logo' />
        <Accordion entries={faqs}/>  
    </div>
    </body>
  );
}
export default About;