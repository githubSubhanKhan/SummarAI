import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            Origin of SummarAI
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            The word <strong>SummarAI</strong> is derived from the slogan of this project that is <strong>summarize the comments with AI</strong>, inspired by <strong>Meta</strong>. This clever wordplay combines <strong>Summary</strong> and <strong>AI</strong> to perfectly capture the essence of our innovative solution.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            Our Purpose
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            In today's fast-paced digital world, time is precious. When scrolling through social media, users often encounter lengthy comment sections with no easy way to grasp the key points of discussions. Our purpose is to revolutionize this experience by implementing an AI-powered comment summarization tool.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Meet the Founder
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            <strong>Muhammad Subhan Khan</strong> is the visionary behind SummarAI. Currently pursuing a Bachelor's degree in <strong>Computer Science with a specialization in Artificial Intelligence</strong> at <strong>NED University of Engineering & Technology, Karachi</strong>, he combines academic excellence with innovative thinking.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
