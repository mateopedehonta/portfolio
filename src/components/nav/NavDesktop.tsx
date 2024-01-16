import { BiDownload } from "react-icons/bi";
import { NavLink, NavList } from "..";

export const NavDesktop = () => {
  return (
    <nav className="flex flex-row justify-between items-center w-3/4 list-none p-2 m-2">
      <ul className="flex flex-row gap-3 w-auto ">
        {NavList.map(({ id, title }: NavLink) => (
          <li key={id} className="navButton">
            <a href={`#${id}`}>{title}</a>
          </li>
        ))}
      </ul>
      <li>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1Yw5VsMG2fXMHfGkGCCfCFh87Op_gnjkg/view?usp=sharing"
          className="flex gap-1 items-center"
        >
          Descargar Cv
          <BiDownload className="text-3xl" />
        </a>
      </li>
    </nav>
  );
};

