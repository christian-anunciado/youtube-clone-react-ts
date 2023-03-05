import React from "react";
import { TbBell } from "react-icons/tb";

type Props = {};

function SubscriptionStatus({}: Props) {
  const [subscribed, setSubscribed] = React.useState(false);

  const handleClick = () => {
    setSubscribed(!subscribed);
  };
  return (
    <div
      className={`flex min-h-[42px] cursor-pointer items-center gap-2 rounded-full bg-darkBgLighter text-white ${
        subscribed ? "pl-3" : "pl-5"
      } pr-5 text-sm font-medium hover:bg-darkDivider dark:bg-darkSoft dark:hover:bg-[#575757]`}
      onClick={handleClick}
    >
      {subscribed && <TbBell size={"1.5em"} />}
      {subscribed ? "Subscribed" : "Subscribe"}
    </div>
  );
}

export default SubscriptionStatus;
