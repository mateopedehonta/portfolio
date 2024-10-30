import { CarouselSkills } from "./CarouselSkills";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const Home = () => {
  return (
    <div className="w-full min-h-[80vh] pt-10  bg-[url('/bg/Intro.png')] bg-no-repeat bg-cover flex justify-center items-center flex-col gap-6">
      <Avatar className="h-[100px] w-auto ">
        <AvatarImage src="/avatar.png" />
        <AvatarFallback>MP</AvatarFallback>
      </Avatar>
      <p className="text-gray-500 font-Inconsolata subtitle">
        Hola! mi nombre es{" "}
        <span className="text-red text-2xl">Mateo Pedehontaa</span> y soy
      </p>
      <h1 className="text-gray-600 title_lg">Full Stack Developer</h1>
      <p className="text-gray-400 text_sm md:w-[680px] text-center h-max">
        Soy un apasionado de la tecnología, lo que me llevó a desarrollarme
        profesionalmente en el área que más me gusta. Pasé años aprendiendo de
        manera autodidacta matemáticas, lógica de programación en Python y
        desarrollo web en JavaScript.
        <br />
        Hoy me siento preparado con varios proyectos para mi portafolio y
        habilidades blandas desarrolladas, como el trabajo en equipo, buena
        comunicación y facilidad para visualizar conceptos.
      </p>
      <CarouselSkills />
    </div>
  );
};
