import React, { useContext, useState } from "react";
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
import SignIn from "../SignIn/SignIn";
import { MenuContext } from "../../context/menuContext";
import { useNavigate } from "react-router-dom";

type Props = {};

const ToggleDarkMode = () => {
  const theme = useSelector((state: any) => state.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`mr-3 flex min-w-0 cursor-pointer items-center gap-5 rounded-lg py-2 px-3 text-sm hover:bg-soft dark:hover:bg-darkSoft dark:hover:text-darkText`}
      onClick={() => dispatch(toggleDarkMode())}
    >
      {theme.darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      {theme.darkMode ? "Light Mode" : "Dark Mode"}
    </div>
  );
};

const Divider = () => {
  return <hr className="w-[95%] text-divider dark:text-darkDivider" />;
};

function MenuItems({}: Props) {
  const menuContext = useContext(MenuContext);
  const selectedMenu = menuContext.selectedMenu;
  const setSelectedMenu = menuContext.setSelectedMenu;
  const navigate = useNavigate();
  return (
    <div className="scroll-stable m-0 mt-2 min-h-0 flex-1 basis-auto overflow-hidden hover:overflow-y-auto">
      <div className="flex flex-col gap-3">
        <div>
          <MenuItem
            iconActive={<AiFillHome size={"1.2em"} />}
            iconDefault={<AiOutlineHome size={"1.2em"} />}
            iconName="Home"
            isActive={selectedMenu === 0}
            onClick={() => {
              setSelectedMenu(0);
              navigate("/");
            }}
          />
          <MenuItem
            iconActive={<MdExplore size={"1.2em"} />}
            iconDefault={<MdOutlineExplore size={"1.2em"} />}
            iconName="Explore"
            isActive={selectedMenu === 1}
            onClick={() => setSelectedMenu(1)}
          />
          <MenuItem
            iconActive={<MdSubscriptions size={"1.2em"} />}
            iconDefault={<MdOutlineSubscriptions size={"1.2em"} />}
            iconName="Subscriptions"
            isActive={selectedMenu === 2}
            onClick={() => setSelectedMenu(2)}
          />
        </div>
        <Divider />
        <div>
          <MenuItem
            iconActive={<MdVideoLibrary size={"1.2em"} />}
            iconDefault={<MdOutlineVideoLibrary size={"1.2em"} />}
            iconName="Library"
            isActive={selectedMenu === 3}
            onClick={() => setSelectedMenu(3)}
          />
          <MenuItem
            iconActive={<MdHistory size={"1.2em"} />}
            iconDefault={<MdHistory size={"1.2em"} />}
            iconName="History"
            isActive={selectedMenu === 4}
            onClick={() => setSelectedMenu(4)}
          />
        </div>
        <Divider />
        <div
          className="flex flex-col gap-3 px-3 py-2"
          onClick={() => setSelectedMenu(-1)}
        >
          <p className="text-xs">
            Sign in to like videos, comment and subscribe.
          </p>
          <SignIn />
        </div>
        <Divider />
        <div>
          <MenuItem
            iconActive={<MdLibraryMusic size={"1.2em"} />}
            iconDefault={<MdOutlineLibraryMusic size={"1.2em"} />}
            iconName="Music"
            isActive={selectedMenu === 5}
            onClick={() => setSelectedMenu(5)}
          />
          <MenuItem
            iconActive={<MdSportsBasketball size={"1.2em"} />}
            iconDefault={<MdOutlineSportsBasketball size={"1.2em"} />}
            iconName="Sports"
            isActive={selectedMenu === 6}
            onClick={() => setSelectedMenu(6)}
          />
          <MenuItem
            iconActive={<IoGameController size={"1.2em"} />}
            iconDefault={<IoGameControllerOutline size={"1.2em"} />}
            iconName="Gaming"
            isActive={selectedMenu === 7}
            onClick={() => setSelectedMenu(7)}
          />
          <MenuItem
            iconActive={<MdMovieFilter size={"1.2em"} />}
            iconDefault={<MdOutlineMovieFilter size={"1.2em"} />}
            iconName="Movies"
            isActive={selectedMenu === 8}
            onClick={() => setSelectedMenu(8)}
          />
          <MenuItem
            iconActive={<IoNewspaper size={"1.2em"} />}
            iconDefault={<IoNewspaperOutline size={"1.2em"} />}
            iconName="News"
            isActive={selectedMenu === 9}
            onClick={() => setSelectedMenu(9)}
          />
          <MenuItem
            iconActive={<RiLiveFill size={"1.2em"} />}
            iconDefault={<RiLiveLine size={"1.2em"} />}
            iconName="Live"
            isActive={selectedMenu === 10}
            onClick={() => setSelectedMenu(10)}
          />
        </div>
        <Divider />
        <div>
          <MenuItem
            iconActive={<MdSettings size={"1.2em"} />}
            iconDefault={<MdOutlineSettings size={"1.2em"} />}
            iconName="Settings"
            isActive={selectedMenu === 11}
            onClick={() => setSelectedMenu(11)}
          />
          <MenuItem
            iconActive={<MdFlag size={"1.2em"} />}
            iconDefault={<MdOutlineFlag size={"1.2em"} />}
            iconName="Report"
            isActive={selectedMenu === 12}
            onClick={() => setSelectedMenu(12)}
          />
          <ToggleDarkMode />
        </div>
        <Divider />
        <div>
          <MenuItem
            iconActive={<MdSettings size={"1.2em"} />}
            iconDefault={<MdOutlineSettings size={"1.2em"} />}
            iconName="Settings"
            isActive={selectedMenu === 11}
            onClick={() => setSelectedMenu(11)}
          />
          <MenuItem
            iconActive={<MdFlag size={"1.2em"} />}
            iconDefault={<MdOutlineFlag size={"1.2em"} />}
            iconName="Report"
            isActive={selectedMenu === 12}
            onClick={() => setSelectedMenu(12)}
          />
          <ToggleDarkMode />
        </div>
        <Divider />
        <div>
          <MenuItem
            iconActive={<MdSettings size={"1.2em"} />}
            iconDefault={<MdOutlineSettings size={"1.2em"} />}
            iconName="Settings"
            isActive={selectedMenu === 11}
            onClick={() => setSelectedMenu(11)}
          />
          <MenuItem
            iconActive={<MdFlag size={"1.2em"} />}
            iconDefault={<MdOutlineFlag size={"1.2em"} />}
            iconName="Report"
            isActive={selectedMenu === 12}
            onClick={() => setSelectedMenu(12)}
          />
          <ToggleDarkMode />
        </div>
      </div>
    </div>
  );
}

export default MenuItems;
