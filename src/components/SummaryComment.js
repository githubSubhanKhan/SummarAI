import React from 'react';

const SummaryComment = () => {
    return (
        <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">AI Generated Comments Summary</label>
            <input class="form-control" id="exampleFormControlTextarea1" disabled readonly></input>
        </div>
    );
}

export default SummaryComment;
