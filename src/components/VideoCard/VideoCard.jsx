import React from "react";
import classes from "./VideoCard.module.css";
const VideoCard = ({ video }) => {
  const { snippet, statistics } = video;
  const { thumbnails, description, tags, title, channelTitle } = snippet;

  return (
    <div className={classes.cardContainer}>
      <img src={thumbnails.medium.url} className={classes.thumbnail} />
      <h4>{title}</h4>
      <p>{channelTitle}</p>
      <span>{statistics.viewCount} Views</span>
    </div>
  );
};

export default VideoCard;
