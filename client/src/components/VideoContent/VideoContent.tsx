import React, { useState } from "react";
import AvatarSample from "../../assets/2.webp";
import { TbDownload } from "react-icons/tb";
import { RiShareForwardLine } from "react-icons/ri";
import LikeDislike from "../LikeDislike/LikeDislike";
import SubscriptionStatus from "../SubscriptionStatus/SubscriptionStatus";
import MoreInfo from "../MoreInfo/MoreInfo";
import Comments from "../Comments/Comments";
import Avatar from "../Avatar/Avatar";
import NumberFormatter from "../../helpers/NumberFormatter";

type Props = {};

type ChildProps = {
  children: React.ReactNode;
};

type TextProps = {
  text: string;
};

type OwnerProps = {
  avatar: string;
  channelName: string;
  subscribers: number;
};

type SubscribersProps = {
  subscribers: number;
};

type ButtonProps = {
  iconDefault?: JSX.Element;
  iconActive?: JSX.Element;
  isActive: boolean;
  iconName: string;
  onClick?: () => void;
};

const Content = () => {
  return (
    <div className="m-h[720px] relative overflow-hidden pt-[56.25%]">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube-nocookie.com/embed/yIaXoop8gl4"
        title="React Video Sharing App UI Design | Youtube UI Clone with React"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowfullscreen="allowfullscreen"
        className="absolute top-0 left-0 h-full w-full border-0"
      ></iframe>
    </div>
  );
};

const Details = ({ children }: ChildProps) => {
  return <div className="mt-1 flex flex-col gap-2 p-1">{children}</div>;
};

const Title = ({ title }: { title: string }) => {
  return <h1 className="text-xl font-bold">{title}</h1>;
};

const Information = ({ children }: ChildProps) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

const ChannelName = ({ text }: TextProps) => (
  <div className="mt-0.5 font-medium text-[#0F0F0F] dark:text-darkText">
    {text || ""}
  </div>
);

const Subscribers = ({ subscribers }: SubscribersProps) => (
  <div className="text-xs font-normal text-[#606060] dark:text-darkTextSoft">
    {`${NumberFormatter(subscribers) || ""} subscribers`}
  </div>
);

const OwnerInfo = (props: OwnerProps) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar src={props.avatar} height={"40"} width={"40"} />
      <div className="flex flex-col">
        <ChannelName text={props.channelName} />
        <Subscribers subscribers={props.subscribers} />
      </div>
    </div>
  );
};

const Button = (props: ButtonProps) => {
  return (
    <div className="flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full bg-soft pl-3 pr-5 text-sm font-medium hover:bg-divider dark:bg-darkSoft dark:hover:bg-[#575757]">
      {props.isActive ? <>{props.iconActive}</> : <>{props.iconDefault}</>}
      {props.iconName}
    </div>
  );
};

function VideoContent({}: Props) {
  return (
    <div className="flex-[5]">
      <div className="container">
        <Content />
        <Details>
          <Title title="Top 10 Most Badass My Hero Academia Moments" />
          <Information>
            <div className="flex gap-6">
              <OwnerInfo
                avatar={AvatarSample}
                channelName="Channel Name"
                subscribers={1_200_200}
              />
              <SubscriptionStatus />
            </div>
            <div className="flex gap-3">
              <LikeDislike />
              <Button
                iconDefault={<RiShareForwardLine size={"1.5em"} />}
                isActive={false}
                iconName="Share"
              />
              <Button
                iconDefault={<TbDownload size={"1.5em"} />}
                isActive={false}
                iconName="Download"
              />
            </div>
          </Information>
          <MoreInfo />
          <Comments />
        </Details>
      </div>
    </div>
  );
}

export default VideoContent;
