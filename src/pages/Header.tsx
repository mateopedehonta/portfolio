import { HiHome } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { AiFillFolderOpen } from "react-icons/ai";
import { BiMessageAdd, BiDownload } from "react-icons/bi";
export const Header = () => {
  return (
    <>
      <header className="hidden fixed lg:flex justify-center w-screen nav-shadow bg-1">
        <nav className="flex flex-row justify-between items-center w-3/4 list-none p-2 m-2">
          <ul className="flex flex-row gap-3 w-auto items-center justify-center">
            <li className="px-2 py-1 hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#">Inicio</a>
            </li>
            <li className="px-2 py-1 hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-sobreMi">Sobre mi</a>
            </li>
            <li className="px-2 py-1 hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-habilidades">Habilidades</a>
            </li>
            <li className="px-2 py-1 hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-proyectos">Proyectos</a>
            </li>
            <li className="px-2 py-1 hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-contacto">Contacto</a>
            </li>
          </ul>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1P7qLtawzzPz9T23D9NHcJczSF-Cl_Dad/view?usp=sharing"
              className="flex gap-1 items-center"
            >
              Descargar Sv
              <BiDownload className="text-3xl" />
            </a>
          </li>
        </nav>
      </header>
      <header className="bg-1 fixed lg:hidden w-screen nav-shadow bg bottom-0 rounded-tl-xl rounded-tr-xl ">
        <nav className="flex flex-row justify-between items-center  list-none p-2 m-2">
          <ul className="flex flex-row gap-3  items-center justify-around w-screen">
            <li className="hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#">
                <HiHome className="m-1 text-2xl" />
              </a>
            </li>
            <li className=" hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-sobreMi">
                <FaUserAlt className="m-1 text-2xl" />
              </a>
            </li>
            <li className=" hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-habilidades">
                <GiSkills className="m-1 text-2xl" />
              </a>
            </li>
            <li className=" hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-proyectos">
                <AiFillFolderOpen className="m-1 text-2xl" />
              </a>
            </li>
            <li className=" hover:bg-black hover:text-white hover:rounded-md active:bg-white ">
              <a href="#section-contacto">
                <BiMessageAdd className="m-1 text-2xl" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
