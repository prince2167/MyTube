import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../contexts";
import classes from "./WatchPage.module.css";
const WatchPage = () => {
  const { dispatch, videos } = useVideo();
  const { id } = useParams();
  const video = videos.find((video) => video.id === id);
  const { snippet, statistics } = video;
  const { thumbnails, description, tags, title, channelTitle } = snippet;

  useEffect(() => {
    dispatch({ type: "MENU_CLOSED" });
  }, []);
  return (
    <div>
      <div>
        <iframe
          width="1000"
          height="500"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          play={true}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className={classes.description}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WatchPage;
