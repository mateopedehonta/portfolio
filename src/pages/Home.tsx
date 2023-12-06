import { FaSortDown } from 'react-icons/fa';

export const Home = () => {
    return ( 
        <section className="h-screen  grid items-center justify-center min-h-screen">
        <div className=" flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold">Hola!</h1>
          <h2 className="text-5xl lg:text-6xl font font-semibold text-center text-black ">Soy Mateo Pedehontaa</h2>
          <p className="p-1 text-3xl lg:text-4xl text-center font-semibold">FullStack Developer</p>
          <a href="#section-sobreMi" className="start-button text-white"><FaSortDown/></a>
        </div>
      </section>
     );
}
 
