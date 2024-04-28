import {combineReducers} from "redux";
import VideoPlayReducer from "./reducers/videoPlayReducer";
import {configureStore} from "@reduxjs/toolkit";


const rootReducer = combineReducers({
    videoPlay: VideoPlayReducer,
    // Add other reducers here
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;