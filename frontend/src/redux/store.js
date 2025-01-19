// 

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";
import feedbackSlice from "./feedbackSlice";  // Import the feedback slice

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Redux persist configuration
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

// Combine all reducers
const rootReducer = combineReducers({
    auth: authSlice,
    job: jobSlice,
    company: companySlice,
    application: applicationSlice,
    feedback: feedbackSlice,  // Add feedback slice here
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and configure the store
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export default store;
