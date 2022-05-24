import About_us_session from './About_us_session';
import React from 'react';
import About_us_form from './About_us_form';


const About_us = () => {
  return (
    <div>
      <div className='container-fluid text-center bg-primary p-5 text-white'>
        <h1>About Us</h1>
        <br />
        <h5>
          "Sculpting ideas into Reality"</h5>

      </div>
      <About_us_session/>
      <About_us_form/>
    </div>
  )
}

export default About_us
