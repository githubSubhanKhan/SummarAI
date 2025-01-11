import React, { useState, useEffect } from 'react';

const AddComment = ({ postId, onCommentAdded }) => {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        // Check if the user has commented recently
        const lastCommentTime = localStorage.getItem("lastCommentTime");
        if (lastCommentTime) {
            const timeElapsed = Math.floor((Date.now() - lastCommentTime) / 1000); // in seconds
            const remainingTime = 60 - timeElapsed;

            if (remainingTime > 0) {
                setTimer(remainingTime); // Set timer if time left is less than a minute
                const countdown = setInterval(() => {
                    setTimer(prev => {
                        if (prev <= 1) {
                            clearInterval(countdown);
                            return null;
                        }
                        return prev - 1;
                    });
                }, 1000);
            }
        }
    }, []);

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
            setTimeout(() => {
                setError("")
            }, 2000);
            return;
        }

        if (timer) {
            setError(`You can comment again in ${timer} seconds.`);
            return;
        }

        try {
            // Make a POST request to the backend to add the comment
            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}post/${postId}/addcomment`, {
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

                // Save the current time as the last comment time
                localStorage.setItem("lastCommentTime", Date.now());

                // Call the parent function to fetch and display new comments
                if (onCommentAdded) {
                    onCommentAdded();  // Trigger parent function to update comments
                }

                // Reset timer
                setTimer(60);
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
                            className="btn btn-primary"
                            disabled={timer !== null} // Disable the button if there's a timer
                        >
                            Post
                        </button>
                    </div>
                </div>
                {success && <p className="text-success">{success}</p>}
                {error && <p className="text-danger">{error}</p>}
                {timer && <p className="text-warning">You can comment again in {timer} seconds.</p>}
            </form>
        </div>
    );
};

export default AddComment;
