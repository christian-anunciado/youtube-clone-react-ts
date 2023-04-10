import React from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";

type Props = {};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-[calc(100%-60px)] flex-col items-center justify-center gap-5">
      {children}
    </div>
  );
};

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[32rem] w-[32rem] rounded-xl border border-darkTextSoft bg-darkText">
      {children}
    </div>
  );
};

const Form = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center dark:text-darkSoft">
      <h1 className="mb-5 text-xl font-bold">
        <span className="relative">
          <span
            className="absolute -inset-1 block -skew-y-3 bg-[#ff3e01]"
            aria-hidden="true"
          ></span>
          <span className="relative px-3 text-darkText">NinjaTube</span>
        </span>
      </h1>
      <h2 className="mb-2 text-2xl font-medium">Login</h2>
      <p>Sign in to your account.</p>
      <form className="mt-4 flex w-full flex-col gap-8 py-2 px-8">
        <div className="flex w-full flex-col gap-3">
          <input
            type="email"
            name="email"
            className="mt-2 rounded-md border border-gray-300 p-2 placeholder:text-sm"
            placeholder="Email or username"
          />
          <input
            type="password"
            className="mt-2 rounded-md border border-gray-300 p-2 placeholder:text-sm"
            placeholder="Password"
          />
        </div>
        <p className="prose text-sm dark:text-gray-600">
          Forgot your user or password?{" "}
          <a href="#" className="text-blue-700 no-underline hover:underline">
            Click here
          </a>{" "}
          to recover it.
          <a
            className="-ml-2 block w-fit rounded p-1 px-2 font-medium text-blue-700 no-underline hover:bg-blue-50"
            href="#"
          >
            Learn more
          </a>
        </p>
        <div className="flex items-center justify-between text-sm">
          <a
            href="/register"
            className="-ml-2 rounded p-1 px-2 font-medium text-blue-700 no-underline hover:bg-blue-50"
          >
            Create account
          </a>
          <button className="rounded bg-blue-600 px-5 py-1.5 font-medium text-darkText hover:bg-blue-900">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex w-[32rem] justify-between text-xs text-textSoft dark:text-darkTextSoft">
      <div className="flex items-center justify-between gap-7">
        <p>English (United States)</p>
        <MdOutlineArrowDropDown size={"1.3em"} />
      </div>
      <div className="flex items-center justify-between gap-6">
        <p>Help</p>
        <p>Privacy</p>
        <p>Terms</p>
      </div>
    </div>
  );
};
function Login({}: Props) {
  return (
    <Container>
      <Wrapper>
        <Form />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Login;
