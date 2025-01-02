import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const fileInputRef = useRef(null);

  // Function to handle the click on the upload icon
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className="container my-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="container d-flex justify-content-center mt-5">
          <div className="rounded-circle bg-light d-flex justify-content-center align-items-center" style={{ width: '150px', height: '150px' }}>
            <i className="fa-solid fa-upload" style={{fontSize: '40px', cursor: 'pointer'}} onClick={handleUploadClick}></i>
            <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
        />
          </div>
        </div>

        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <Link to="/login" className="btn btn-primary">Create Account</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
