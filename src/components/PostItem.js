import React from 'react';
import AddComment from './AddComment';
import ShowCommentsModal from './ShowCommentsModal';
import Comments from './Comments';

const PostItem = () => {

    return (
        <div>
            <div class="card" style={{ width: "18rem" }}>
                <p class="card-text">Saim Ayub Injured During Second Test</p>
                <div class="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" class="btn custom-btn">Like</button>
                    <button type="button" class="btn custom-btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        Comments
                    </button>
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-scrollable">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="staticBackdropLabel">Comments</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <Comments/>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AddComment />
            </div>
        </div>
    );
}

export default PostItem;
