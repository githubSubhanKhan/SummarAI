import React from 'react';

const Comments = ({ comments }) => {
    return (
        <div>
            {comments && comments.length > 0 ? (
                comments.map((comment, index) => (
                    <div
                        className="list-group w-100 list-group-item list-group-item-action"
                        key={index}
                    >
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">@{comment.username}</h5>
                            <small>{new Date(comment.date).toLocaleDateString()}</small>
                        </div>
                        <p className="mb-1">{comment.comment}</p>
                    </div>
                ))
            ) : (
                <p>No comments yet.</p>
            )}
        </div>
    );
};

export default Comments;
