const initialState = {
    videoPlay: false
}

const VideoPlayReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_VIDEO":
            return { ...state, videoPlay: action.payload };
        default:
            return state;
    }
}
export default VideoPlayReducer;