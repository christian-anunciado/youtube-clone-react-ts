import React from "react";
import MenuItem from "./MenuItem";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import {
  MdOutlineExplore,
  MdExplore,
  MdSubscriptions,
  MdOutlineSubscriptions,
  MdVideoLibrary,
  MdOutlineVideoLibrary,
  MdHistory,
  MdLibraryMusic,
  MdOutlineLibraryMusic,
  MdSportsBasketball,
  MdOutlineSportsBasketball,
  MdMovieFilter,
  MdOutlineMovieFilter,
  MdSettings,
  MdOutlineSettings,
  MdFlag,
  MdOutlineFlag,
  MdOutlineLightMode,
  MdDarkMode,
} from "react-icons/md";
import {
  IoPersonCircleOutline,
  IoGameController,
  IoGameControllerOutline,
  IoNewspaper,
  IoNewspaperOutline,
} from "react-icons/io5";
import { RiLiveFill, RiLiveLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../redux/themeRedux";
type Props = {};

const SignIn = () => {
  const theme = useSelector((state: any) => state.theme);
  return (
    <div className="flex flex-col gap-1 px-4 py-2">
      <p className="text-xs">Sign in to like videos, comment and subscribe.</p>
      <button className="flex w-max items-center justify-center gap-1 rounded-xl border border-blueBorder py-1 px-6 text-sm uppercase text-blueBorder hover:bg-blueSoft dark:hover:bg-darkBlueSoft">
        <IoPersonCircleOutline size={"1.3em"} />
        Sign In
      </button>
    </div>
  );
};

const ToggleDarkMode = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`flex min-w-full cursor-pointer items-center gap-5 rounded-lg py-1.5 px-3 text-sm hover:bg-soft dark:hover:bg-darkTextSoft dark:hover:text-darkText`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      {theme.darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      {theme.darkMode ? "Light Mode" : "Dark Mode"}
    </div>
  );
};

const Divider = () => {
  return <hr className="text-divider dark:text-darkDivider" />;
};

function MenuItems({}: Props) {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <MenuItem
          iconActive={<AiFillHome size={"1.2em"} />}
          iconDefault={<AiOutlineHome size={"1.2em"} />}
          iconName="Home"
          isActive={false}
        />
        <MenuItem
          iconActive={<MdExplore size={"1.2em"} />}
          iconDefault={<MdOutlineExplore size={"1.2em"} />}
          iconName="Explore"
          isActive={false}
        />
        <MenuItem
          iconActive={<MdSubscriptions size={"1.2em"} />}
          iconDefault={<MdOutlineSubscriptions size={"1.2em"} />}
          iconName="Subscriptions"
          isActive={false}
        />
      </div>
      <Divider />
      <div>
        <MenuItem
          iconActive={<MdVideoLibrary size={"1.2em"} />}
          iconDefault={<MdOutlineVideoLibrary size={"1.2em"} />}
          iconName="Library"
          isActive={false}
        />
        <MenuItem
          iconActive={<MdHistory size={"1.2em"} />}
          iconDefault={<MdHistory size={"1.2em"} />}
          iconName="History"
          isActive={false}
        />
      </div>
      <Divider />
      <SignIn />
      <Divider />
      <div>
        <MenuItem
          iconActive={<MdLibraryMusic size={"1.2em"} />}
          iconDefault={<MdOutlineLibraryMusic size={"1.2em"} />}
          iconName="Music"
          isActive={false}
        />
        <MenuItem
          iconActive={<MdSportsBasketball size={"1.2em"} />}
          iconDefault={<MdOutlineSportsBasketball size={"1.2em"} />}
          iconName="Sports"
          isActive={false}
        />
        <MenuItem
          iconActive={<IoGameController size={"1.2em"} />}
          iconDefault={<IoGameControllerOutline size={"1.2em"} />}
          iconName="Gaming"
          isActive={false}
        />
        <MenuItem
          iconActive={<MdMovieFilter size={"1.2em"} />}
          iconDefault={<MdOutlineMovieFilter size={"1.2em"} />}
          iconName="Movies"
          isActive={false}
        />
        <MenuItem
          iconActive={<IoNewspaper size={"1.2em"} />}
          iconDefault={<IoNewspaperOutline size={"1.2em"} />}
          iconName="News"
          isActive={false}
        />
        <MenuItem
          iconActive={<RiLiveFill size={"1.2em"} />}
          iconDefault={<RiLiveLine size={"1.2em"} />}
          iconName="Live"
          isActive={false}
        />
      </div>
      <Divider />
      <div>
        <MenuItem
          iconActive={<MdSettings size={"1.2em"} />}
          iconDefault={<MdOutlineSettings size={"1.2em"} />}
          iconName="Settings"
          isActive={false}
        />
        <MenuItem
          iconActive={<MdFlag size={"1.2em"} />}
          iconDefault={<MdOutlineFlag size={"1.2em"} />}
          iconName="Report"
          isActive={false}
        />
        <ToggleDarkMode />
      </div>
    </div>
  );
}

export default MenuItems;
