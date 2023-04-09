import React from "react";
import { MdSearch } from "react-icons/md";
import SignIn from "../SignIn/SignIn";

type Props = {};

type PropsContainer = {
  children: React.ReactNode;
};

const Container = ({ children }: PropsContainer) => (
  <div className="sticky top-0 z-50 h-[60px] w-full bg-bgLighter dark:bg-darkBgLighter">
    {children}
  </div>
);

const Wrapper = ({ children }: PropsContainer) => (
  <div className="relative flex h-full items-center justify-end px-6">
    {children}
  </div>
);

const Search = () => {
  return (
    <div className="absolute left-0 right-0 m-auto flex w-[40%] flex-row items-center justify-between rounded-full border-2 border-divider outline-none dark:border-darkSoft">
      <input
        type="text"
        className="mr-0.5 h-[35px] min-h-0 grow rounded-full rounded-r-none border-none bg-transparent pl-3 text-sm text-textSoft outline-none dark:text-darkTextSoft"
        placeholder="Search"
      />
      <div className="flex h-[35px] items-center rounded-full rounded-l-none bg-soft px-4 text-textSoft dark:bg-darkSoft dark:text-darkText">
        <MdSearch size={"1.3em"} />
      </div>
    </div>
  );
};

function Navbar({}: Props) {
  return (
    <Container>
      <Wrapper>
        <Search />
        <SignIn />
      </Wrapper>
    </Container>
  );
}

export default Navbar;
