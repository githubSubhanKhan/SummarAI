import React, { useState, useEffect } from 'react';

const SummaryComment = ({ postId }) => {
    const [summary, setSummary] = useState(''); // State to store the summary
    const [error, setError] = useState(''); // State to handle errors

    const fetchSummary = async () => {
        try {
            // Use fetch to call the backend API
            const response = await fetch(`http://localhost:5000/api/post//${postId}/getsummarizedcomments`);

            if (!response.ok) {
                throw new Error('Failed to fetch summary');
            }

            const data = await response.json();

            // Check if summary exists in the response data
            if (data && data.summary) {
                setSummary(data.summary); // Set the summary in state
            } else {
                setSummary('No summary available');
            }
        } catch (err) {
            console.error('Error fetching summary:', err);
            setError('Failed to fetch summary');
        }
    };

    // Call fetchSummary every time the postId changes
    useEffect(() => {
        fetchSummary();
    }, [postId]);

    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">AI Generated Comments Summary</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="2" disabled readOnly value={error || summary}></textarea>
            
        </div>
    );
}

export default SummaryComment;
