import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = async (e) => {
        e.preventDefault(); // Prevent form submission
    
        try {
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            props.showAlert("Admin login successfully!", "success");
            setTimeout(() => {
              navigate('/adminhome'); // Redirect to home page after successful signup
            }, 2000);
          } else {
            // Display error message
            props.showAlert("Invalid username or password!", "warning")
          }
        } catch (err) {
          props.showAlert("An error occurred while logging in. Please try again.", "danger")
        }
      };

    return (
        <>
            <h1 className='container d-flex justify-content-center align-items-center my-5'>Admin Login</h1>
            <div className='container d-flex justify-content-center align-items-center my-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <form onSubmit={handleAdminLogin}>
                            <div className="mb-3">
                                <label htmlFor="username" className="form-label">Username</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="container d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Admin;
