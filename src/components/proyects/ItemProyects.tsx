import { BsGithub } from "react-icons/bs";
import { Proyect } from "../../interfaces/Proyect.interfaces";

interface Prop {
  item: Proyect;
}

export const ItemProyects = ({ item }: Prop) => {
  const { description, img, link, name } = item;
  return (
    <div
      className="w-full bg-1 flex flex-col  rounded-md py-2 m-1"
    >
      <a target="_blank" className="w-1/2 p-2 h-full" href={link}>
        <img className="w-full h-full" src={img} alt="" />
      </a>
      <div className="h-w w-1/2 flex flex-col self-center justify-around">
        <h1 className="text-2xl">{name}</h1>
        <p>{description}</p>
        <a href={link} className="p-2 flex justify-end">
          <BsGithub className="text-2xl hover:text-blue-700" />
        </a>
      </div>
    </div>
  );
};
