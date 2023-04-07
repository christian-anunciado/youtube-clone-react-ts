import React from "react";
import Recommendations from "../components/Recommendations/Recommendations";
import VideoContent from "../components/VideoContent/VideoContent";

type Props = {};

function Video({}: Props) {
  return (
    <div className="flex gap-6 px-8 py-6">
      <VideoContent />
      <Recommendations />
    </div>
  );
}

export default Video;
