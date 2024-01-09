import { FaSortDown } from "react-icons/fa";
import { useData } from "../hooks/useData";
// import { BsGithub } from "react-icons/bs";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemProyects } from "../components/proyects/ItemProyects";

export const Home = () => {
  const { proyects } = useData();

  const sliderSettings: Settings = {
    infinite: true,
    dots: true,
    autoplay: true, // Activar reproducción automática
    autoplaySpeed: 3000, // Velocidad de reproducción automática en milisegundos (ejemplo: 3000 ms = 3 segundos)
    arrows: false, // Mostrar flechas de navegación
    className: "w-11/12 h-auto ",
  };

  return (
    <>
      <section className="gap-5 items-center justify-around min-h-[90vh] w-full flex">
        <div className="flex flex-col gap-4 p-2 text-center">
          <h1 className="text-4xl lg:text-5xl  font-semibold">Hola!</h1>
          <h2 className="w-full text-5xl lg:text-6xl font font-semibold  text-black">
            Soy Mateo Pedehontaa
          </h2>
          <p className="p-1 text-3xl lg:text-4xl  font-semibold">
            FullStack Developer 
            <img />
          </p>
        </div>
        <div className="w-[33%]  flex   items-center max-md:hidden ">
          <Slider {...sliderSettings}>
            {proyects.map((item) => (
              <ItemProyects key={item.id} {...item} />
            ))}
          </Slider>
        </div>
      </section>
      <div className=" w-full flex justify-center ">
        <a
          href="#section-proyectos"
          className="start-button text-white "
        >
          <FaSortDown />
        </a>
      </div>
    </>
  );
};
