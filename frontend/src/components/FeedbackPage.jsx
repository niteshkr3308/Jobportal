import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '@/redux/feedbackSlice'; // You'll need to create this slice

const FeedbackPage = () => {
    const [name, setName] = useState('');
    const [feedback, setFeedback] = useState('');
    const dispatch = useDispatch();

    const submitFeedback = (e) => {
        e.preventDefault();
        if (name && feedback) {
            dispatch(addFeedback({ name, feedback }));
            setName('');
            setFeedback('');
        }
    };

    return (
        <div className="max-w-7xl mx-auto my-20">
            <h2 className="text-3xl font-bold mb-5">Submit Your Feedback</h2>

            <form onSubmit={submitFeedback} className="bg-white p-8 rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-lg font-semibold">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 mt-2"
                        placeholder="Your Name"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-lg font-semibold">Feedback</label>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        className="w-full p-3 rounded-lg border border-gray-300 mt-2"
                        placeholder="Your Feedback"
                        rows="5"
                    />
                </div>

                <button type="submit" className="w-full bg-[#6A38C2] text-white p-3 rounded-lg hover:bg-[#5A2E9D] transition duration-300">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackPage;
