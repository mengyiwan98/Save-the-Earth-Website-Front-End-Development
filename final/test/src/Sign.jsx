import React, { useState } from 'react';
import './Signup/Sign.css';
import FormSignup from './Signup/Signup';
import FormSuccess from './Signup/Success';
import left from './Signup/left.jpeg';

const Sign = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={left} alt='savetheworld' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Sign;