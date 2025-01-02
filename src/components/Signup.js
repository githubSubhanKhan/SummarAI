import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div className="container my-5">
            <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="" />
                <div className="card-body">
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username"/>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password"/>
                    </div>
                    <Link to="/login" className="btn btn-primary">Create Account</Link>
                </div>
            </div>
        </div>
  );
}

export default Signup;
