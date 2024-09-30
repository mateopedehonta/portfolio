import { getCategories } from "@/actions/getProjects";
import Image from "next/image";

export const ProjectList = async () => {
  const projects = await getCategories();
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center gap-10  ">
      <div className="text-center">
        <p className="text-red subtitle">Mis trabajos</p>
        <h2 className="text-gray-600 tilte_md">Ver proyectos destacados</h2>
      </div>
      <div className="grid grid-cols-3 justify-around w-[1040px] gap-[24px]">
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-[330px] h-[280px] bg-gray-300 rounded-xl flex flex-col p-3 gap-6"
          >
            <Image
              src={project.images[0]}
              alt=""
              className="w-[306px] h-[156px] rounded-xl"
              width={10}
              height={10}
            />
            <div className="p-1">
              <h1 className="text-gray-600 title_sm capitalize">
                {project.title}
              </h1>
              <p className="text-gray-500 text_sm">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
