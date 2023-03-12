import React, { useState } from "react";
import { MdSort } from "react-icons/md";
import InputComment from "../InputComment/InputComment";
import Comment from "./Comment";

type Props = {};

type HeaderProps = {
  numberOfComments?: number;
};

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col gap-2">{children}</div>
);

const Header = (props: HeaderProps) => {
  return (
    <div className="flex items-center gap-8">
      {props.numberOfComments || ""} Comments
      <div className="flex items-center gap-1 text-sm font-medium">
        <MdSort size={"1.2em"} />
        Sort By
      </div>
    </div>
  );
};

export default function Comments({}: Props) {
  return (
    <div>
      <Wrapper>
        <Header numberOfComments={250} />
        <InputComment />
        <div className="flex flex-col gap-5">
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
          <Comment />
        </div>
      </Wrapper>
    </div>
  );
}
