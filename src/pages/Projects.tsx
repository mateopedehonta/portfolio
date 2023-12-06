import { ItemProyects } from "../components/proyects/ItemProyects";
import { useData } from "../hooks/useData";

export const Projects = () => {
  const { isLoading, proyects } = useData();

  return (
    <section
      id="section-proyectos"
      className="min-h-screen flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-3xl lg:text-3xl font-bold text-center">
        {isLoading ? "Cargando.." : "Algunos de mis proyectos"}
      </h1>
      <div className="mx-10 h-3/4 grid lg:grid-cols-3 lg:grid-rows-3 gap-7">
        {proyects.map((item) => (
          <ItemProyects item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
