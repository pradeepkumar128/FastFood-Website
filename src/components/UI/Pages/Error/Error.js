import React from 'react';
import "./Error.css";
import notFound from '../../../../assets/Images/ErrorImage/notFound.png'


const Error = () => {
  return (
   <>
    <div className='container'>
        <div className='not_found'>
            <img src={notFound} alt='not found'/>
            <p className='errortxt'>Not Found 404</p>
        </div>
    </div>
   </>
  )
}

export default Error;