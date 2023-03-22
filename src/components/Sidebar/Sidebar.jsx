import React from "react";
import { Link } from "react-router-dom";
import classes from "./Sidebar.module.css";
import {
  AiOutlineLike,
  BsFire,
  MdOutlineWatchLater,
  MdOutlinePlaylistAddCheck,
  GrHistory,
  GrHomeRounded,
} from "../../assets/icon";

const Sidebar = () => {
  return (
    <div>
      <div className={classes.container}>
        <Link to="/" className={classes.links}>
          <GrHomeRounded size="20" />

          <p> Home</p>
        </Link>
        <Link to="/trending" className={classes.links}>
          <BsFire size="20" />
          <p> Trending</p>
        </Link>
        <Link to="watchlater" className={classes.links}>
          <MdOutlineWatchLater size="20" />
          <p> Watch later</p>
        </Link>
        <Link to="/history" className={classes.links}>
          <GrHistory size="20" />
          <p> History</p>
        </Link>
        <Link to="/myPlayList" className={classes.links}>
          <MdOutlinePlaylistAddCheck size="20" />
          <p> My playlist</p>
        </Link>
        <Link to="/likedVideos" className={classes.links}>
          <AiOutlineLike size="20" />
          <p> Liked Videos</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
