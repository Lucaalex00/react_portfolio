import React, { createContext, useState } from "react";

//CONTEXT
export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [isShow, setIsShow] = useState(false);

  // TOGGLE VISIBILITY
  const toggleMenu = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return (
    <MenuContext.Provider value={{ isShow, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
