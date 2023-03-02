import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

type Props = {};

function SignIn({}: Props) {
  return (
    <div className="flex flex-col gap-3 px-4 py-2">
      <p className="text-xs">Sign in to like videos, comment and subscribe.</p>
      <button className="flex w-max items-center justify-center gap-1 rounded-xl border border-blueBorder py-1 px-5 text-sm uppercase text-blueBorder hover:bg-blueSoft dark:hover:bg-darkBlueSoft">
        <IoPersonCircleOutline size={"1.3em"} />
        Sign In
      </button>
    </div>
  );
}

export default SignIn;
