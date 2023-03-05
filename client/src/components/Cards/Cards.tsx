import React from "react";
import Card from "../Card/Card";

type Props = {};

function Cards({}: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(0,360px))] justify-center justify-items-center gap-x-3 gap-y-7 py-6 px-8">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Cards;
