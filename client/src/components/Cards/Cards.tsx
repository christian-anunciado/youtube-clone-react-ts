import React, { useEffect } from "react";
import Card from "../Card/Card";
import { serverAPI } from "../../connection/serverAPI";
import { CardProps } from "../../types/CardProps";

type Props = {
  type: string;
};

function Cards({ type }: Props) {
  const [videos, setVideos] = React.useState([]);
  useEffect(() => {
    const fetchVideos = async () => {
      const response = await serverAPI.get(`/videos/${type}`);

      setVideos(response.data);
    };
    fetchVideos();
  }, [type]);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(0,340px))] justify-items-center gap-x-4 gap-y-7 py-6 px-12">
      {videos.map((video: CardProps) => (
        <Card key={video._id} props={video} />
      ))}
    </div>
  );
}

export default Cards;
