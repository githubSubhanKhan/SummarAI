import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <>
        <h1 className='container d-flex justify-content-center align-items-center my-5'>Welcome To Postify</h1>
      <div className='container d-flex justify-content-center align-items-center my-5'>
        <Link to="/signup">
          <button className="btn btn-primary mx-5">Signup</button>
        </Link>
        <Link to="/login">
          <button className="btn btn-primary mx-5">Login</button>
        </Link>
      </div>
    </>
  );
}

export default Welcome;
