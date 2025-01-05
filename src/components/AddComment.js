import React, {useState} from 'react';

const AddComment = ({ postId }) => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        // Get the username from localStorage
        const username = localStorage.getItem("username");
        if (!username) {
            setError("User is not logged in. Please log in to comment.");
            return;
        }

        if (!comment.trim()) {
            setError("Comment cannot be empty.");
            return;
        }

        try {
            // Make a POST request to the backend
            const response = await fetch(`http://localhost:5000/api/post/${postId}/addcomment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ username, comment }),
            });

            if (response.ok) {
                const data = await response.json();
                setSuccess("Comment added successfully!");
                setComment(""); // Clear the input field
            } else {
                const errorData = await response.json();
                setError(errorData.error || "Failed to add comment.");
            }
        } catch (err) {
            console.error(err);
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="my-3">
                    <label htmlFor="addComment" className="form-label">Add Comment</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="addComment"
                            placeholder="Write a comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Post
                        </button>
                    </div>
                </div>
                {success && <p className="text-success">{success}</p>}
                {error && <p className="text-danger">{error}</p>}
            </form>
        </div>

    );
}

export default AddComment;
