import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, videoReducer } from "../reducer/index";

const API_KEY = " AIzaSyBOe0eS_jqKfpJtOdg8zH5RfUYSDlWR_1k";
const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=${API_KEY}`;
const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);
  const { isMenuOpen, videos, error } = state;

  const getVideos = async () => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "FETCH_SUCESSFUL", payload: data.items });
    } catch (error) {
      dispatch({ type: "FETCH_FAILED", payload: error });
    }
  };

    useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideoContext.Provider value={{ dispatch, isMenuOpen, videos, error }}>
      {children}
    </VideoContext.Provider>
  );
};

const useVideo = () => useContext(VideoContext);
export { useVideo, VideoProvider };
