import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Technologies = [
  { title: "GitHub", color: "white" },
  { title: "HTML", color: "red" },
  { title: "CSS", color: "blue" },
  { title: "JavaScript", color: "yellow" },
  { title: "React", color: "blue" },
  { title: "Node.js", color: "green" },
];

export const Home = () => {
  return (
    <div className="w-full min-h-[80vh] bg-[url('/bg/Intro.png')] bg-no-repeat bg-cover flex justify-center items-center flex-col gap-6">
      <Avatar className="h-[100px] w-auto">
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>MP</AvatarFallback>
      </Avatar>
      <p className="text-gray-500 font-Inconsolata subtitle">
        Hola! mi nombre es{" "}
        <span className="text-red text-2xl">Mateo Pedehontaa</span> y soy
      </p>
      <h1 className="text-gray-600 title_lg">Full Stack Developer</h1>
      <p className="text-gray-400 text_sm w-[680px] text-center">
        Soy un apasionado de la tecnología, lo que me llevó a desarrollarme
        profesionalmente en el área que más me gusta. Pasé años aprendiendo de
        manera autodidacta matemáticas, lógica de programación en Python y
        desarrollo web en JavaScript.
        <br />
        Hoy me siento preparado con varios proyectos para mi portafolio y
        habilidades blandas desarrolladas, como el trabajo en equipo, buena
        comunicación y facilidad para visualizar conceptos.
      </p>
      <ul className="text-md text-gray-500 flex gap-5 mt-32">
        {Technologies.map(({ color, title }) => (
          <li
            key={title}
            className="flex justify-center items-center gap-2 bg-gray-300 py-3 px-6 rounded-3xl"
          >
            <Image
              src={`/icons/${title}.svg`}
              className={` w-auto h-[20px] bg-${color}`}
              width={20}
              height={20}
              alt=""
            />
            <p>{title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
