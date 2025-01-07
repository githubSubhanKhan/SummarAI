import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import Comments from './Comments';
import SummaryComment from './SummaryComment';

const PostItem = () => {
    const [posts, setPosts] = useState([]);  // Initialize as empty array
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/post/fetchposts');
                const data = await response.json();
                setPosts(data.posts || []);  // Ensure data.posts is an array
                setLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleCommentAdded = (postId) => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/post/${postId}/getcomments`);
                const data = await response.json();
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post._id === postId ? { ...post, comments: data.comments || [] } : post  // Ensure comments is an array
                    )
                );
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        };

        fetchComments();
    };

    if (loading) {
        return <div>Loading posts...</div>;
    }

    return (
        <div>
            {posts.length === 0 ? (
                <div>No posts available</div>
            ) : (
                posts.map((post) => (
                    <div key={post._id} className="card" style={{ width: "30rem" }}>
                        <p className="card-text">{post.title}</p>
                        <div className="btn-group" role="group" aria-label="Basic outlined example">
                            <button type="button" className="btn custom-btn">Like</button>
                            <button type="button" className="btn custom-btn" data-bs-toggle="modal" data-bs-target={`#staticBackdrop${post._id}`}>
                                Comments
                            </button>
                            <div className="modal fade" id={`staticBackdrop${post._id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`staticBackdropLabel${post._id}`} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id={`staticBackdropLabel${post._id}`}>Comments</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                        <Comments comments={post.comments} />
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AddComment postId={post._id} onCommentAdded={() => handleCommentAdded(post._id)} />
                            <SummaryComment postId={post._id}/>
                    </div>
                ))
            )}
        </div>
    );
};

export default PostItem;
