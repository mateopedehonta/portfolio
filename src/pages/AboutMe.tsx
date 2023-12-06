export const AboutMe = () => {
  return (
    <section id="section-sobreMi" className="h-screen flex ">
      <div className="hidden h-full w-1/2 lg:flex justify-center items-center">
        <img className="lg:w-1/2" src="./recorte-foto-mateo.png" alt="" />
      </div>
      <div className="lg:w-1/2 flex flex-col justify-center items-center gap-2 p-2 lg:p-20 text-center">
        <div className="bg-1 p-5 rounded-md flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Sobre mi</h2>
          <p className="text-1xl lg:text-2xl">
            Soy un apasionado en la tecnología ,esto me llevó a desarrollarme
            profesionalmente en el área que más me gusta. Pase años aprendiendo
            como autodidacta matemáticas , lógica de programación en Python y
            desarrollo web en JavaScript
            <br />
            <br />
            Hoy me siento preparado con varios proyectos para mi portfolio y
            habilidades blandas desarrolladas, como trabajo en equipo, buena
            comunicación y facilidad para visualizar conceptos.
          </p>
        </div>
      </div>
    </section>
  );
};

