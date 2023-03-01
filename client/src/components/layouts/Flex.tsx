import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Flex(props: Props) {
  return <div className="flex">{props.children}</div>;
}
