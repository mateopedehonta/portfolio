import { ItemProyects } from "../components/proyects/ItemProyects";
import { useData } from "../hooks/useData";

export const Projects = () => {
  const { isLoading, proyects } = useData();

  return (
    <section
      id="section-proyectos"
      className=" pt-24 lg:pb-0 lg:py-20 flex flex-col justify-center items-center gap-10"
    >
      <h1 className="text-3xl lg:text-3xl font-bold text-center">
        {isLoading ? "Cargando.." : "Mis proyectos"}
      </h1>
      <div className=" px-4 lg:mx-10 h-3/4 lg:w-2/3  grid lg:grid-cols-3 lg:grid-rows-2 gap-7">
        {proyects.sort((a,b)=>parseInt(a.id) - parseInt(b.id)).map((item) => (
          <ItemProyects {...item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
