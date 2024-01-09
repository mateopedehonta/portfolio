import { ItemProyects } from "../components/proyects/ItemProyects";
import { useData } from "../hooks/useData";

export const Projects = () => {
  const { isLoading, proyects } = useData();

  return (
    <div
      id="section-proyectos"
      className=" min-h-screen flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-3xl lg:text-3xl font-bold text-center">
        {isLoading ? "Cargando.." : "Mis proyectos"}
      </h1>
      <div className="mx-10 h-3/4 w-2/3  grid lg:grid-cols-3 lg:grid-rows-3 gap-7">
        {proyects.map((item) => (
          <ItemProyects {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
