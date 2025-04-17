import React from 'react';
import "./Lab2.css";

export const Lab2 = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title' >KL University</div>
        <div className='menu'>
          <span>Home</span>
          <span>Portfolio</span>
          <span>About</span>
          <span>Login</span>
        </div>
      </div>
      
      <div className='content'>
        <div className='logo'>
          <img class="image-left" width={120} height={120} src='data:image/png;base64,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' alt='Logo' />
        </div>
        
        <div className='topp'>

        <p>Project Name - FSAD</p>
        <p>Domain</p>
        <p>Batch</p>
        <p>Year-2nd</p>
        </div>

      </div>
      
      <div className='footer'>
        <div className='s_footer'>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-snapchat"></i>
        </div>
      </div>
    </div>
  );
}
