import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h1 className='container d-flex justify-content-center align-items-center my-5'>Login</h1>
    <div className='container d-flex justify-content-center align-items-center my-5'>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" required />
          </div>
          <div className="container d-flex justify-content-center align-items-center">
          <Link to="/home" class="btn btn-primary">Login</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
