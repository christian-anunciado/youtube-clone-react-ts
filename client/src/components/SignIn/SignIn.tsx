import React from "react";
import { IoPersonCircleOutline } from "react-icons/io5";

type Props = {};

function SignIn({}: Props) {
  return (
    <button className="flex h-fit w-max items-center justify-center gap-1 rounded-xl border border-blueBorder py-1 px-4 text-sm font-medium uppercase text-blueBorder hover:bg-blueSoft dark:hover:bg-darkBlueSoft">
      <IoPersonCircleOutline size={"1.3em"} />
      Sign In
    </button>
  );
}

export default SignIn;
