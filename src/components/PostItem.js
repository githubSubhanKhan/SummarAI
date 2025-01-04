import React from 'react';
import Comments from './Comments';

const PostItem = () => {
    return (
        <div className='container'>
            <div class="card" style={{ width: "18rem" }}>
                <p class="card-text">Saim Ayub Injured During Second Test</p>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn btn-outline-primary">Like</button>
                    <button type="button" class="btn btn-outline-primary">Comment</button>
                </div>
                <Comments />
            </div>
        </div>
    );
}

export default PostItem;
