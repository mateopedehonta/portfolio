import Image from "next/image";

export const MyService = () => {
  return (
    <div className="w-full h-[40vh] bg-gray-100 flex flex-col justify-around py-10">
      <div className="w-full text-center">
        <p className="text-red subtitle">Mis Servicios</p>
        <h2 className="text-gray-600 tilte_md">
          Como puedo ayudar con su negocio
        </h2>
      </div>
      <div className="flex justify-center gap-10">
        <div className="h-[155px] w-[280px] border border-gray-200 rounded-lg p-4 flex flex-col justify-around items-start">
          <Image
            width={10}
            height={10}
            alt=""
            src={"/icons/pc.svg"}
            className="h-[40px] w-auto"
          />
          <h3 className=" text-gray-600 title_sm">Sitios web y aplicaciones</h3>
          <p className="text-gray-500 text-sm">Desarrollo de interfaz</p>
        </div>
        <div className="h-[155px] w-[280px] border border-gray-200 rounded-lg p-4 flex flex-col justify-around items-start">
          <Image
            width={10}
            height={10}
            alt=""
            src={"/icons/db.svg"}
            className="h-[40px] w-auto"
          />
          <h3 className=" text-gray-600 title_sm">API y base de datos</h3>
          <p className="text-gray-500 text-sm">Creando servicios del sistema</p>
        </div>
        <div className="h-[155px] w-[280px] border border-gray-200 rounded-lg p-4 flex flex-col justify-around items-start">
          <Image
            width={10}
            height={10}
            alt=""
            src={"/icons/devops.svg"}
            className="h-[30px] w-auto"
          />
          <h3 className=" text-gray-600 title_sm">DevOps</h3>
          <p className="text-gray-500 text-sm">
            Gestión e infraestructura de aplicaciones.
          </p>
        </div>
      </div>
    </div>
  );
};
