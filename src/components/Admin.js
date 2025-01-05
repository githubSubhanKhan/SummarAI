import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = () => {
        navigate('/createpost');
    }

    return (
        <>
            <h1 className='container d-flex justify-content-center align-items-center my-5'>Admin Login</h1>
            <div className='container d-flex justify-content-center align-items-center my-5'>
                <div className="card" style={{ width: "18rem" }}>
                    <div className="card-body">
                        {error && <div className="alert alert-danger">{error}</div>}
                        <form onSubmit={handleAdminLogin}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={email}
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
                                    required
                                />
                            </div>
                            <div className="container d-flex justify-content-center align-items-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                    {success && <div className="text-success mb-3">{success}</div>}
                </div>
            </div>
        </>
    );
}

export default Admin;
