import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
    const [showForm, setShowForm] = useState(false);

    const handleToggleForm = () => {
        setShowForm(!showForm);
    };

    return (
        <div className="review-form-wrapper">
            <div className="review-form-container">
                <h2>Consultation Feedback</h2>
                <p>We value your feedback. Please provide us with your thoughts on the consultation.</p>
                <button className="feedback-button" onClick={handleToggleForm}>
                    {showForm ? 'Close Feedback Form' : 'Open Feedback Form'}
                </button>
                {showForm && (
                    <div className="feedback-form">
                        <h3>Feedback Form</h3>
                        <form>
                            <label htmlFor="patientName">Name:</label>
                            <input type="text" id="patientName" name="patientName" required />
                            
                            <label htmlFor="feedback">Feedback:</label>
                            <textarea id="feedback" name="feedback" rows="5" required></textarea>
                            
                            <button type="submit">Submit Feedback</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewForm;
