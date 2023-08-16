import { createContext, useContext, useState } from "react";

interface IToggleMenuContext {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

// Create a new context
export const ToggleMenuContext = createContext<IToggleMenuContext>({
  isMenuOpen: false,
  toggleMenu: () => {},
});
// Create a provider component to wrap around the app
export const ToggleMenuProvider = ({
  children,
}: React.PropsWithChildren<{}>) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Create a function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Pass the state and toggle function to the context value
  const contextValue: IToggleMenuContext = {
    isMenuOpen,
    toggleMenu,
  };

  return (
    <ToggleMenuContext.Provider value={contextValue}>
      {children}
    </ToggleMenuContext.Provider>
  );
};

export const useToggleMenu = (): IToggleMenuContext =>
  useContext(ToggleMenuContext);
