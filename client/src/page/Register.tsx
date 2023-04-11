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
    <div className="h-[38rem] w-[36rem] rounded-xl border border-darkTextSoft bg-darkText">
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
      <h2 className="mb-2 text-2xl font-medium">Register</h2>
      <p>Create your NinjaTube account.</p>
      <form className="mt-4 flex w-full flex-col gap-8 py-2 px-8">
        <div className="flex w-full flex-col gap-4">
          <div className="items center flex w-full gap-2">
            <input
              type="text"
              name="firstName"
              className="mt-2 flex-1 rounded-md border border-gray-300 p-2 placeholder:text-sm"
              placeholder="First name"
            />
            <input
              type="text"
              name="lastName"
              className="mt-2 flex-1 rounded-md border border-gray-300 p-2 placeholder:text-sm"
              placeholder="Last name"
            />
          </div>
          <input
            type="text"
            name="email"
            className="mt-2 rounded-md border border-gray-300 p-2 placeholder:text-sm"
            placeholder="Username"
          />
          <span className="prose -mt-3 inline-block pl-2 text-xs text-gray-500">
            You can use letters, numbers & periods.
          </span>
          <input
            type="email"
            name="email"
            className="mt-2 rounded-md border border-gray-300 p-2 placeholder:text-sm"
            placeholder="Email (e.g. @gmail.com, @yahoo.com)"
          />
          <div className="items center flex w-full gap-2">
            <input
              type="password"
              className="mt-2 flex-1 rounded-md border border-gray-300 p-2 placeholder:text-sm"
              placeholder="Password"
            />
            <input
              type="password"
              className="mt-2 flex-1 rounded-md border border-gray-300 p-2 placeholder:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          <span className="prose -mt-3 inline-block pl-2 text-xs text-gray-500">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between text-sm">
          <a
            href="/login"
            className="-ml-2 rounded p-1 px-2 font-medium text-blue-700 no-underline hover:bg-blue-50"
          >
            Sign in instead
          </a>
          <button className="rounded bg-blue-600 px-5 py-1.5 font-medium text-darkText hover:bg-blue-900">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="flex w-[36rem] justify-between text-xs text-textSoft dark:text-darkTextSoft">
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
function Register({}: Props) {
  return (
    <Container>
      <Wrapper>
        <Form />
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Register;
