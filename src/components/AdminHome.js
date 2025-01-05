import React, { useState } from 'react';

const AdminHome = () => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setTitle(value); // Update title directly
    };

    const handleCreatePost = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const formData = { title }; // Create the form data object

        try {
            const response = await fetch('http://localhost:5000/api/post/createpost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // You can handle the response here if needed, but no messages will be shown
            const data = await response.json();
            if (response.ok) {
                // Optionally, you can reset the form or perform other actions here
                setTitle(''); // Reset title after successful post creation
            }
        } catch (err) {
            // Handle connection errors silently
            console.error('Failed to connect to the server', err);
        }
    };

    return (
        <div className='container my-2 d-flex justify-content-center align-items-center'>
            <h1>Admin Panel</h1>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Create Post
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Post</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={handleCreatePost}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input
                                        type="text"
                                        id="title"
                                        value={title}
                                        onChange={handleChange}
                                        className="form-control"
                                        required
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="submit" className="btn btn-primary">Add Post</button> {/* Change type to "submit" */}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;