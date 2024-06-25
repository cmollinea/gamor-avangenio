import { useRef, useState } from "react";
import { MobileNavigationContext } from ".";

export const MobileNavContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [openNav, setOpenNav] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const handleOpenNav = () => {
    const document = window.document.documentElement;
    document.style.overflow = "hidden";
    setOpenNav(true);
  };

  const handleCloseNav = () => {
    const document = window.document.documentElement;
    document.style.overflow = "auto";
    navRef.current?.classList.remove("opacity-0");
    navRef.current?.classList.add("fade-out-element");
    setTimeout(() => setOpenNav(false), 300);
  };

  return (
    <MobileNavigationContext.Provider
      value={{ openNav, handleOpenNav, handleCloseNav, navRef }}
    >
      {children}
    </MobileNavigationContext.Provider>
  );
};
