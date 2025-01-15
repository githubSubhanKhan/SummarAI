import React from 'react';
import PostItem from './PostItem';

const Home = () => {
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center py-4">
            <div className="row w-100">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <PostItem />
                </div>
            </div>
        </div>
    );
}

export default Home;
