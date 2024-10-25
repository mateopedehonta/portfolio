import { ProjectForm } from "@/components";

export default function Dashboard() {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center text-gray-400 gap-5">
      <h1 className="text-gray-500 font-Inconsolata subtitle">
        Agregar proyecto
      </h1>
      <ProjectForm />
    </div>
  );
}
