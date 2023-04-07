import React from "react";
import NumberFormatter from "../../helpers/NumberFormatter";

type Props = {
  title: string;
  channelName: string;
  views: number;
  timestamp: string;
  thumbnail: string;
};

type ThumbnailProps = {
  src: string;
};

type DetailsProps = {
  title: string;
  channelName: string;
  views: number;
  timestamp: string;
};

const Thumbnail = ({ src }: ThumbnailProps) => {
  return (
    <div className="h-24 flex-[0.6]">
      <img
        src={src || "https://i.ytimg.com/vi/2Z4m4lnjxkY/hqdefault.jpg"}
        alt="thumbnail"
        className="h-full w-full rounded-sm"
      />
    </div>
  );
};

const Details = (props: DetailsProps) => {
  return (
    <div className="flex flex-[1] flex-col gap-2">
      <h1 className="prose text-sm font-semibold dark:text-darkText">
        {props.title || "Video Title"}
      </h1>
      <p className="text-xs text-textSoft dark:text-darkTextSoft">
        {props.channelName || "Channel Name"}
      </p>
      <p className="text-gray-500 text-xs text-textSoft dark:text-darkTextSoft">
        {`${NumberFormatter(props.views || 1_000_000)} views • ${
          props.timestamp || "1 year ago"
        }`}
      </p>
    </div>
  );
};
function VideoTitle(props: Props) {
  return (
    <div className="flex gap-2">
      <Thumbnail src={props.thumbnail} />
      <Details
        channelName={props.channelName}
        timestamp={props.timestamp}
        title={props.title}
        views={props.views}
      />
    </div>
  );
}

export default VideoTitle;
