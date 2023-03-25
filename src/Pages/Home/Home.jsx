import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { VideoCard } from "../../components/index";
import { useVideo } from "../../contexts";
import classes from "./Home.module.css";
const Home = () => {
  const { dispatch, videos } = useVideo();
  useEffect(() => {
    dispatch({ type: "MENU_ALWAYS_OPEN" });
  }, []);
  return (
    <div className={classes.homeContainer}>
      {videos.map((video) => (
        <Link to={`watch-page/${video.id}`} className={classes.cardLink}>
          <VideoCard key={video.id} video={video} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
