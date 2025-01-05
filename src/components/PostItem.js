import React from 'react';
import Comments from './Comments';
import AddComment from './AddComment';

const PostItem = () => {
    return (
        <div>
            <div class="card" style={{ width: "18rem" }}>
                <p class="card-text">Saim Ayub Injured During Second Test</p>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">Like</button>
                    <button type="button" class="btn btn-outline-primary">Comments</button>
                </div>
                <AddComment/>
                <Comments />
            </div>
        </div>
    );
}

export default PostItem;
