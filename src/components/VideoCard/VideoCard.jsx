import React from "react";
import classes from "./VideoCard.module.css";
import { useVideo } from "../../contexts/index";
const VideoCard = ({ video }) => {
  const { isMenuOpen } = useVideo();
  const { snippet, statistics } = video;
  const { thumbnails, description, tags, title, channelTitle } = snippet;
  
  return (
    <div
      className={isMenuOpen ? classes.cardContainer2 : classes.cardContainer}
    >
      <img src={thumbnails.medium.url} className={classes.thumbnail} />
      <div className={classes.cardDescription}>
        <h4 className={classes.title}>{title}</h4>
        <p>{channelTitle}</p>
        <span>{statistics.viewCount} Views</span>
      </div>
    </div>
  );
};

export default VideoCard;
