import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    feedbacks: [],
};

const feedbackSlice = createSlice({
    name: 'feedback',
    initialState,
    reducers: {
        addFeedback: (state, action) => {
            state.feedbacks.push(action.payload);
        },
    },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
