import { Icon } from "@iconify/react";

const iconsStack = [
  "logos:html-5",//html
  "vscode-icons:file-type-css",//css
  "vscode-icons:file-type-js-official",//js
  "devicon:nodejs-wordmark",//nodejs
  "devicon:typescript",//typescript
  "logos:tailwindcss",//tailwind
  "logos:react",//react
  "logos:redux",//redux
  "devicon:reactrouter-wordmark",//react-router
  "devicon:nextjs-wordmark",//nexjs
  "logos:nestjs",//nest
  "devicon:mongodb-wordmark",//mongo
  "devicon:express-wordmark",//express
  "devicon:github-wordmark",//github
  "logos:git",//git
  "logos:postman",//postman
  "devicon:linux",//linux
  "vscode-icons:file-type-firebase",//firebase
  "devicon:figma",//figma
  "logos:visual-studio-code",//vscode
  "logos:cloudinary"//cloud
];

export const AboutMe = () => {
  return (
    <section id="section-sobreMi" className="min-h-screen flex ">
      <div className="hidden h-full w-1/3 lg:flex justify-center items-center self-center">
        <img className="lg:w-2/3" src="./recorte-foto-mateo.png" alt="" />
      </div>
      <div className="lg:w-2/3 flex flex-col justify-center items-center gap-2 p-2 lg:p-20 text-center">
        <h2 className="text-3xl font-bold">Sobre mi</h2>

        <div className="bg-1 p-5 mb-4 rounded-md flex flex-col gap-4">
          <p className="text-xl lg:text-xl">
            Soy un apasionado de la tecnología, lo que me llevó a desarrollarme
            profesionalmente en el área que más me gusta. Pasé años aprendiendo
            de manera autodidacta matemáticas, lógica de programación en Python
            y desarrollo web en JavaScript.
            <br />
            <br />
            Hoy me siento preparado con varios proyectos para mi portafolio y
            habilidades blandas desarrolladas, como el trabajo en equipo, buena
            comunicación y facilidad para visualizar conceptos.
          </p>
        </div>
        <h2 className="text-3xl font-bold">Habilidades</h2>
        <div className="pt-2 flex flex-wrap justify-center gap-2 sm:gap-3">
          {iconsStack.map((iconName) => (
            <li className="rounded-lg bg-[#e7e0e0] p-3 list-none hover:scale-110 hover:">
              <Icon icon={iconName} className="h-16 w-[80px] sm:w-[100px]" />
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};
