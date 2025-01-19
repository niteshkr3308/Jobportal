import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '@/redux/feedbackSlice'; // You'll need to create this slice

const StudentFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([
        { id: 1, name: 'John Doe', feedback: 'Great platform for job opportunities!' },
        { id: 2, name: 'Jane Smith', feedback: 'Very user-friendly and easy to navigate.' },
        { id: 3, name: 'Michael Brown', feedback: 'Helped me land my dream job!' },
    ]);

    return (
        <div className="max-w-7xl mx-auto my-20 flex flex-col items-center text-center">
    <h2 className="text-3xl font-bold mb-5">
        <span className="text-[#6A38C2]">READ WHAT OUR CLIENT SAY'S</span>
    </h2>
    <p className="text-lg font-bold text-[#32CD32]">We are very happy because</p>
    <p className="text-lg font-bold text-[#32CD32]">We have happy clients</p>

            <div className="flex gap-4 overflow-x-scroll p-4">
                {feedbacks.map(feedback => (
                    <div
                        key={feedback.id}
                        className="flex-shrink-0 w-80 p-6 rounded-lg shadow-md bg-white dark:bg-gray-900 hover:scale-105 transition transform duration-300"
                    >
                        <p className="font-semibold text-lg">{feedback.name}</p>
                        <p className="mt-2 text-gray-600 dark:text-gray-300">{feedback.feedback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentFeedback;
