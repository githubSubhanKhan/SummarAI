import React from 'react';
import { Link } from 'react-router-dom';
  
  const Home = () =>  {
	return (
	  <div className='container'>
        <h1>Welcome To CakeBook</h1>
        <Link to="/signup">
        <button className="btn btn-primary mx-5">Signup</button>
        </Link>
        <Link to="/login">
        <button className="btn btn-primary mx-5">Login</button>
        </Link>
	  </div>
	);
  }
  
  export default Home;
  