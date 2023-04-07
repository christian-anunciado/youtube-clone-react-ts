import React from "react";
import VideoTitle from "./VideoTitle";

type Props = {};

const Recommendations = (props: Props) => {
  return (
    <div className="flex flex-[2] flex-col gap-4">
      <div className="flex flex-col gap-2.5 pt-1">
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
        <VideoTitle />
      </div>
    </div>
  );
};

export default Recommendations;
