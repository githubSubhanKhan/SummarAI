import React from 'react';
import ImageUpload from './ImageUpload';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center my-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="container d-flex justify-content-center mt-5">
          <ImageUpload/>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required/>
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" required/>
          </div>
          <Link to="/login" className="btn btn-primary">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
