export const Skills = () => {
    return ( 
        <div
        className=" w-full flex flex-col justify-center items-cente gap-7"
      >
        <h1 className="text-3xl lg:text-4xl font-bold">Stack</h1>
        <div className="flex flex-col lg:flex-row gap-3  justify-center">
          <div className="lg:w-1/4 bg-1 p-5 flex flex-col rounded-md gap-2">
            <h2 className="text-3xl text-center">FrontEnd</h2>
            <ul className="flex flex-col justify-center items-center lg:items-start gap-2">
              <li >HTML5</li>
              <li>Css3</li>
              <li>JavaScript</li>
              <li>TailwindCss</li>
              <li>ReactJs</li>
              <li>Redux</li>
            </ul>
          </div>
          <div className="lg:w-1/4 bg-1 p-5 flex flex-col items-center lg:items-start rounded-md gap-2">
            <h2 className="text-3xl text-center">BackEnd</h2>
            <ul className="flex flex-col justify-center lg:items-start gap-2">
              <li>NodeJs</li>
              <li>Mongojs</li>
              <li>MySQL</li>
              <li>Firebases</li>
              <li>Typescript</li>
              <li>API Rest</li>
            </ul>
          </div>
          <div className="lg:w-1/4 bg-1 p-5 flex flex-col items-center lg:items-start rounded-md gap-2">
            <h2 className="text-3xl text-center">Tools</h2>
            <ul className="flex flex-col justify-center lg:items-start gap-2">
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className="lg:w-1/4 bg-1 p-5 flex flex-col items-center lg:items-start rounded-md gap-2">
            <h2 className="text-3xl text-center">Blandas</h2>
            <ul className="flex flex-col justify-center gap-2">
              <li>Trabajo en equipo</li>
            </ul>
          </div>
        </div>
      </div>
     );
}
 
