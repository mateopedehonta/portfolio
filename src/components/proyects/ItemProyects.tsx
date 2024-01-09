import { Proyect } from "../../interfaces/Proyect.interfaces";

import { BiLogoTypescript } from "react-icons/bi";
import { FaExternalLinkAlt, FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";

export const ItemProyects = ({
  description,
  img,
  link,
  name,
  stack,
}: Proyect) => {
  return (
    <div className="w-full bg-1 flex flex-col  rounded-lg ">
      <a target="_blank" className="min-h-[190px] relative text-black hover:text-blue-600" href={link}>
        <FaExternalLinkAlt className="absolute right-0 m-2 " />

        <img className="w-full h-full " src={img} alt="" />
      </a>
      <div className="h-full flex flex-col justify-between py-2 px-4 gap-2">
        <h1 className="text-2xl capitalize">{name}</h1>
        <p>{description}</p>
        <div className="text-2xl  flex justify-between">
          <div className="flex items-center gap-4 text-xl">
            <p className="flex text-xl gap-3">
              <FaReact className=" hover:text-blue-700" />
              <BiLogoTypescript className=" hover:text-blue-700" />
            </p>

            <p className="text-sm hover:text-blue-700">{stack}</p>
          </div>
          <BsGithub className=" hover:text-blue-700" />
        </div>
      </div>
    </div>
  );
};
