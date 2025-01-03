import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [image, setImage] = useState(null); // State to store the uploaded image
  const fileInputRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle the click on the upload icon
  const handleUploadClick = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      console.log("Image URL:", imageURL); // Debug: Log the image URL
      setImage(imageURL); // Set the image preview
    } else {
      console.error("No file selected or invalid file type."); // Debug: Log error
    }
  };
  return (
    <div className="container my-5">
      <div className="card" style={{ width: "18rem" }}>
        <div className="container d-flex justify-content-center mt-5">
          <div
            className="rounded-circle bg-light d-flex justify-content-center align-items-center"
            style={{ width: "150px", height: "150px", position: "relative", overflow: "hidden" }} onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {image ? (
              <img
                src={image}
                alt="Uploaded"
                className="img-fluid"
                style={{
                  width: "100%", height: "100%", objectFit: "cover", opacity: isHovered ? 0.5 : 1,
                  transition: "opacity 0.3s ease"
                }}
              />
            ) : (
              <i
                className="fa-solid fa-upload"
                style={{ fontSize: "40px", cursor: "pointer" }}
                onClick={handleUploadClick}
              ></i>
            )}
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            {image && isHovered && (
              <i
                className="fa-solid fa-pen-to-square position-absolute p-2 rounded-circle"
                style={{
                  fontSize: "40px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
              position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}
                onClick={handleUploadClick}
              ></i>
            )}
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
