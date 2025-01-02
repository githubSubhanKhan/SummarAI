import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <Link to="/login">
        <button className="btn btn-primary">Create Account</button>
      </Link>
    </div>
  );
}

export default Signup;
