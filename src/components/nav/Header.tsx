
import { NavDesktop, NavMobile } from "..";

export const Header = () => {
  return (
    <>
      <header className="hidden fixed lg:flex justify-center w-screen nav-shadow  bg-1 z-50">
        <NavDesktop />
      </header>
      <NavMobile />
    </>
  );
};
