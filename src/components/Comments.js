import React, { useState, useEffect } from 'react';

const Comments = ({ postId }) => {
    const [comments, setComments] = useState([]);  // Initialize as empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/post/${postId}/getcomments`);
                const data = await response.json();
                setComments(data.comments || []);  // Ensure data.comments is an array
                setLoading(false);
            } catch (error) {
                console.error('Error fetching comments:', error);
                setLoading(false);
            }
        };

        fetchComments();
    }, [postId]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        // If the date is invalid, return a default message
        if (isNaN(date)) {
            return "Invalid date";
        }
        return date.toLocaleDateString();  // Format the date as per the user's locale
    };

    if (loading) {
        return <div>Loading comments...</div>;
    }

    return (
        <div>
            {comments.length === 0 ? (
                <div>No comments yet.</div>
            ) : (
                comments.map((comment) => (
                    <div key={comment._id} className="list-group w-100 list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{comment.username}</h5>
                            <small>{formatDate(comment.date)}</small>
                        </div>
                        <p className="mb-1">{comment.comment}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Comments;
