import React from "react";
import Deku from "../../assets/hqdefault.webp";
import AvatarSample from "../../assets/2.webp";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

type ImageProps = {
  src?: string;
};

type TextProps = {
  text: string;
};

const Container = ({ children }: Props) => (
  <div className="container cursor-pointer">{children}</div>
);

const Wrapper = ({ children }: Props) => (
  <div className="flex flex-col gap-3">{children}</div>
);

const Thumbnail = ({ src }: ImageProps) => (
  <img
    src={src || ""}
    alt=""
    className="h-[202px] w-full rounded-xl border-none bg-darkTextSoft object-cover outline-none"
  />
);

const Details = ({ children }: Props) => (
  <div className="flex gap-2.5">{children}</div>
);

const Avatar = ({ src }: ImageProps) => (
  <img
    src={src || ""}
    alt=""
    className="h-[36px] w-[36px] rounded-full bg-darkTextSoft object-cover"
  />
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

const Info = ({ text }: TextProps) => (
  <div className="text-sm font-normal text-[#606060] dark:text-darkTextSoft">
    {text || ""}
  </div>
);

function Card({}: Props) {
  return (
    <Link to={`video/test`}>
      <Container>
        <Wrapper>
          <Thumbnail src={Deku} />
          <Details>
            <Avatar src={AvatarSample} />
            <TextDetails>
              <Title text="RETURNING TO PROFESSIONAL" />
              <ChannelName text="SkrowRepaP" />
              <Info text="1.2M views • 2 days ago" />
            </TextDetails>
          </Details>
        </Wrapper>
      </Container>
    </Link>
  );
}

export default Card;
