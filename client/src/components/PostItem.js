import React, { useState, useEffect } from 'react';
import AddComment from './AddComment';
import Comments from './Comments';
import SummaryComment from './SummaryComment';

const PostItem = () => {
    const [posts, setPosts] = useState([]);  // Initialize as empty array
    const [loading, setLoading] = useState(true);
    const [likedPosts, setLikedPosts] = useState({});


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}post/fetchposts`);
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
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}post/${postId}/getcomments`);
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

    const handleLikeClick = async (postId) => {
        try {
            const username = localStorage.getItem('username');

            // Check if the user has already liked the post (by username)
            if (likedPosts[postId] && likedPosts[postId] === username) {
                // console.log('Post already liked by this user');
                return;
            }

            const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}post/${postId}/like`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username }),
            });

            const data = await response.json();

            if (response.ok) {
                // Update the post likes in the state
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post._id === postId ? { ...post, likes: data.likes } : post
                    )
                );
                // Mark this post as liked by the current user in localStorage
                setLikedPosts((prevLikedPosts) => ({
                    ...prevLikedPosts,
                    [postId]: username, // Save the username with the postId to track likes
                }));
                localStorage.setItem('likedPosts', JSON.stringify(likedPosts)); // Store in localStorage
            } else {
                console.error(data.error); // Log error message (e.g., "User has already liked this post")
            }
        } catch (error) {
            console.error('Error liking the post:', error);
        }
    };

    if (loading) {
        return <div>Loading posts...</div>;
    }

    return (
        <div>
            {posts.map((post) => (
                <div key={post._id} className="card mb-5 mx-auto" style={{ maxWidth: "100%" }}>
                    <img
                        src={`/images/${post.image}`}
                        className="card-img-top"
                        alt=""
                        style={{ maxHeight: "300px", objectFit: "cover", width: "100%" }}
                    />
                    <div className="container my-2">
                        <p className="card-text">{post.title}</p>
                    </div>
                    <div className="btn-group w-100" role="group" aria-label="Basic outlined example">
                        <button
                            type="button"
                            className="btn custom-btn"
                            onClick={() => handleLikeClick(post._id)}
                        >
                            <i className="fa-solid fa-thumbs-up mx-2"></i>
                            Like ({post.likes || 0})
                        </button>
                        <button
                            type="button"
                            className="btn custom-btn"
                            data-bs-toggle="modal"
                            data-bs-target={`#staticBackdrop${post._id}`}
                        >
                            <i className="fa-solid fa-comment mx-2"></i>
                            Comments
                        </button>
                    </div>
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
                    <div className="container">
                        <AddComment postId={post._id} onCommentAdded={() => handleCommentAdded(post._id)} />
                        <SummaryComment postId={post._id} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostItem;
