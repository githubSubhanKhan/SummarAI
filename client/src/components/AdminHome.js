import React, { useState, useRef } from 'react';

const AdminHome = (props) => {
    const [title, setTitle] = useState('');
    const fileInputRef = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { value } = e.target;
        setTitle(value); // Update title directly
    };

    const handleCreatePost = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const formData = { image, title }; // Create the form data object

        try {
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}post/createpost`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // You can handle the response here if needed, but no messages will be shown
            const data = await response.json();
            if (response.ok) {
                console.log(data)
                // Optionally, you can reset the form or perform other actions here
                setTitle(''); // Reset title after successful post creation
                props.showAlert("Post created successfully!", "success");
            }
        } catch (err) {
            // Handle connection errors silently
            props.showAlert("Internal server error!", "danger");
        }
    };

    const [image, setImage] = useState(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file) {
            const fileName = file.name;  // Get the original file name
            setImage(fileName);
            const imageURL = URL.createObjectURL(file);  
            setImagePreview(imageURL);
        }
    };

    return (
        <>
            <h1 className='container d-flex justify-content-center align-items-center my-5'>Admin Panel</h1>
            <div className='container my-2 d-flex justify-content-center align-items-center'>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Create Post
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Post</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => {
                                    setImage(null);
                                    fileInputRef.current.value = "";
                                }}></button>
                            </div>
                            <form onSubmit={handleCreatePost}>
                                <div className="modal-body">
                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        ref={fileInputRef}
                                    />
                                    {image && (
                                        <div class="card mt-3">
                                            <img src={imagePreview} class="card-img-top" />
                                        </div>
                                    )}
                                    <div className="mb-3 my-3">
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
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => {
                                        setImage(null);
                                        fileInputRef.current.value = "";
                                    }}>Close</button>
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add Post</button> {/* Change type to "submit" */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;