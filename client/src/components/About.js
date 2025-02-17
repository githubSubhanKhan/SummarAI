import React from 'react';

const About = () => {
  return (
    <div className='container'>
      <h2 className='mb-3'>About Us</h2>
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
      <div className="container mt-5 d-flex justify-content-center align-items-center">
        <h1>Our Socials</h1>
      </div>
      <div class="container">
        <div class="d-flex flex-wrap justify-content-center align-items-center text-center mt-2">
          <div class="d-flex align-items-center me-4 mb-3">
            <i class="fa-brands fa-linkedin me-2" style={{fontSize: "40px"}}></i>
            <p class="mb-0">
              <a class="link-opacity-100-hover" href="https://www.linkedin.com/in/msubhankhan21/" target="_blank">
                LinkedIn
              </a>
            </p>
          </div>
          <div class="d-flex align-items-center me-4 mb-3">
            <i class="fa-brands fa-github me-2" style={{fontSize: "40px"}}></i>
            <p class="mb-0">
              <a class="link-opacity-100-hover" href="https://github.com/githubSubhanKhan" target="_blank">
                GitHub
              </a>
            </p>
          </div>
          <div class="d-flex align-items-center mb-3">
            <i class="fa-solid fa-envelope me-2" style={{fontSize: "40px"}}></i>
            <p class="mb-0">
              <a class="link-opacity-100-hover" href="mailto:subhankhan21102005@gmail.com" target="_blank">
                Email
              </a>
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;
