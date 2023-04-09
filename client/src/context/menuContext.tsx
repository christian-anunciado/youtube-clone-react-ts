import { createContext, useState } from "react";

type MenuContextData = {
  selectedMenu: number;
  setSelectedMenu: (selectedMenu: number) => void;
};

export const MenuContext = createContext({} as MenuContextData);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedMenu, setSelectedMenu] = useState(0);

  return (
    <MenuContext.Provider value={{ selectedMenu, setSelectedMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
