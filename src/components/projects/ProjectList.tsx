import { getCategories } from "@/actions/getProjects";
import { ProyectItem } from "./ProyectItem";

export const ProjectList = async () => {
  const projects = await getCategories();
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center gap-10  ">
      <div className="text-center">
        <p className="text-red subtitle">Mis trabajos</p>
        <h2 className="text-gray-600 tilte_md">Ver proyectos destacados</h2>
      </div>
      <div className="grid grid-cols-1 py-10 md:py-0  md:grid-cols-3 justify-around md:w-[1040px] gap-[24px]">
        {projects &&
          projects.map((project) => (
            <ProyectItem key={project.id} {...project} />
          ))}
      </div>
    </div>
  );
};
