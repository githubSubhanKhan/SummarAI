import React from 'react';

const AddComment = () => {
    return (
        <div>
            <form>
                <div className="my-3">
                    <label htmlFor="addComment" className="form-label">Add Comment</label>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            id="addComment"
                            placeholder="Write a comment..."
                        />
                        <button
                            type="submit"
                            className="btn btn-primary">
                            Post
                        </button>
                    </div>
                </div>
            </form>
        </div>

    );
}

export default AddComment;
