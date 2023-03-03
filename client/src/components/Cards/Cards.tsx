import React from "react";
import Card from "../Card/Card";

type Props = {};

function Cards({}: Props) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(360px,auto))] justify-items-center gap-x-0 gap-y-7 py-6 px-8">
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
