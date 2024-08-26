import React, { useState } from 'react';
import './ReviewForm.css';

const ReviewForm = () => {
    const [reviews, setReviews] = useState([
        { id: 1, doctorName: 'Dr. John Doe', speciality: 'Cardiology', reviewGiven: false },
        { id: 2, doctorName: 'Dr. Jane Smith', speciality: 'Dermatology', reviewGiven: false },
        // Add more doctors as needed
    ]);

    const handleFeedbackClick = (id) => {
        alert(`Provide feedback for doctor with ID: ${id}`);
    };

    return (
        <div className="review-form-container">
            <div className="review-form-content">
                <h2>Reviews</h2>
                <table className="review-table">
                    <thead>
                        <tr>
                            <th>Serial Number</th>
                            <th>Doctor Name</th>
                            <th>Doctor Speciality</th>
                            <th>Provide feedback</th>
                            <th>Review Given</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map((review, index) => (
                            <tr key={review.id}>
                                <td>{index + 1}</td>
                                <td>{review.doctorName}</td>
                                <td>{review.speciality}</td>
                                <td>
                                    <button
                                        className="feedback-btn"
                                        onClick={() => handleFeedbackClick(review.id)}
                                    >
                                        Click Here
                                    </button>
                                </td>
                                <td>{review.reviewGiven ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ReviewForm;
