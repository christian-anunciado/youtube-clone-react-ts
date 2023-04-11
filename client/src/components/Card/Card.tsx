import React, { useEffect } from "react";
import ThumbnailSample from "../../assets/hqdefault.webp";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { CardProps } from "../../types/CardProps";
import NumberFormatter from "../../helpers/NumberFormatter";
import { format } from "timeago.js";
import { ChannelProps } from "../../types/ChannelProps";
import { serverAPI } from "../../connection/serverAPI";

type Props = {
  children: React.ReactNode;
};

type TextProps = {
  text: string;
};

type InfoProps = {
  views: number;
  time: string;
};

type ThumbnailProps = {
  src: string;
};

const Container = ({ children }: Props) => (
  <div className="container cursor-pointer">{children}</div>
);

const Wrapper = ({ children }: Props) => (
  <div className="flex flex-col gap-3">{children}</div>
);

const Thumbnail = ({ src }: ThumbnailProps) => (
  <img
    src={src || ""}
    alt=""
    className="pointer-events-none h-[202px] w-[340px] rounded-xl border-none bg-darkTextSoft object-cover outline-none"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      target.src = ThumbnailSample;
    }}
  />
);

const Details = ({ children }: Props) => (
  <div className="flex gap-2.5">{children}</div>
);

const TextDetails = ({ children }: Props) => <div className="">{children}</div>;

const Title = ({ text }: TextProps) => (
  <div className="overflow-ellipsis text-base font-[500] text-[#0f0f0f] dark:text-darkText">
    {text || ""}
  </div>
);

const ChannelName = ({ text }: TextProps) => (
  <div className="mt-0.5 text-sm text-[#606060] dark:text-darkTextSoft">
    {text || ""}
  </div>
);

const Info = ({ views, time }: InfoProps) => (
  <div className="flex items-center text-sm font-normal text-[#606060] dark:text-darkTextSoft">
    {NumberFormatter(views)} views
    <span className="inline-flex h-full items-center justify-center px-1 font-medium">
      •
    </span>
    {format(time)}
  </div>
);

function Card({ props }: { props: CardProps }) {
  const [channel, setChannel] = React.useState<ChannelProps>(
    {} as ChannelProps
  );
  useEffect(() => {
    const fetchChannelName = async () => {
      const req = await serverAPI.get(`/users/find/${props.userId}`);
      setChannel(req.data as ChannelProps);
    };
    fetchChannelName();
  }, [props.userId]);

  return (
    <Link to={`video/test`}>
      <Container>
        <Wrapper>
          <Thumbnail src={props.thumbnailUrl} />
          <Details>
            <div>
              <Avatar src={channel?.img} height={"36"} width={"36"} />
            </div>
            <TextDetails>
              <Title text={props.title} />
              <ChannelName text={channel?.name} />
              <Info views={props.views} time={props.createdAt} />
            </TextDetails>
          </Details>
        </Wrapper>
      </Container>
    </Link>
  );
}

export default Card;
