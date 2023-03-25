import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVideo } from "../../contexts";

const WatchPage = () => {
  const { dispatch, videos } = useVideo();
  const { id } = useParams();

  useEffect(() => {
    dispatch({ type: "MENU_CLOSED" });
  }, []);
  return (
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
  );
};

export default WatchPage;
