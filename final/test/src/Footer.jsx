import React from 'react';
import './Style/Footer.css';


function Footer( {setPage} ) {
    
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Save the Earth to receive our news!
        </p>
        <p className='footer-subscription-text'>
          Unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <a href="#" className='cv-btn3'>Subscription</a>
          </form>
        </div>
      </section>
      </div>
  );
}

export default Footer;
