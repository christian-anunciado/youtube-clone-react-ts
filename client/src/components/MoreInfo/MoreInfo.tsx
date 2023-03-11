import React, { useState } from "react";

type Props = {};

type ChildrenProps = {
  children: React.ReactNode;
};

type ViewProps = {
  views: number;
};

type ReleaseProps = {
  release: string;
};

type DescriptionProps = {
  description: string;
};

type TagProps = {
  tag: string[];
};

const MainInfoContainer = ({ children }: ChildrenProps) => (
  <div className="flex items-center gap-2">{children}</div>
);

const Views = (props: ViewProps) => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
  });
  return (
    <div className="text-sm font-medium">{`${
      formatter.format(props.views) || ""
    } views`}</div>
  );
};

const Release = (props: ReleaseProps) => (
  <div className="text-sm font-medium">{`${props.release || ""}`}</div>
);

const Tags = (props: TagProps) => (
  <div className="flex items-center gap-1 overflow-ellipsis">
    {props.tag.map((tag) => (
      <div className="text-sm font-medium text-[#606060] dark:text-darkTextSoft">
        {`#${tag}`}
      </div>
    ))}
  </div>
);

const Description = (props: DescriptionProps) => {
  const [showMore, setShowMore] = useState(false);

  const truncate = (str: string, n: number | 200) => {
    return str.length > n ? str.slice(0, n - 1) + "..." : str;
  };

  return (
    <div className="overflow-ellipsis text-sm">
      {showMore ? props.description : truncate(props.description, 200)}
      {!showMore ? (
        <button
          className="ml-2 font-semibold"
          onClick={() => setShowMore(!showMore)}
        >
          Show more
        </button>
      ) : (
        <button
          className="mt-2 block font-semibold"
          onClick={() => setShowMore(!showMore)}
        >
          Show less
        </button>
      )}
    </div>
  );
};

function MoreInfo({}: Props) {
  return (
    <div className="mt-2 flex w-full flex-col rounded-lg bg-soft py-3 px-3 dark:bg-darkSoft">
      <MainInfoContainer>
        <Views views={1_340_400} />
        <Release release={"1 year ago"} />
        <Tags tag={["tag1", "tag2", "tag3", "tag4", "tag5", "tag6"]} />
      </MainInfoContainer>
      <Description
        description={
          "Exercitation culpa tempor est tempor quis id laboris nulla qui occaecat et sunt consequat. Eu minim dolor pariatur enim eiusmod voluptate laboris ad nulla ad. Reprehenderit reprehenderit elit elit consectetur magna velit esse tempor nisi consequat."
        }
      />
    </div>
  );
}

export default MoreInfo;
