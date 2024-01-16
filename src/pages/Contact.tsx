import { BsFillEnvelopeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e: Event) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_YOUR_SERVICE_ID,
        import.meta.env.VITE_YOUR_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.status, result.text);
        },
        (error) => {
          console.log(
            `'FAILED...' message: ${error.text} status:${error.status}`
          );
        }
      );
  };

  return (
    <section
      id="section-contacto"
      className="pt-24 pb-32 flex flex-col justify-center items-center gap-5"
    >
      <h1 className="text-4xl font-bold">Contacto</h1>
      <div className="flex flex-col lg:flex-row p-y4 lg:w-4/5">
        <div className=" lg:w-1/2 flex justify-center">
          <ul className="flex flex-col gap-5">
            {/* <li>
              <h2 className="lg:text-2xl flex gap-2">
                <BsFillTelephoneFill /> Telefono
              </h2>
              <p className="text-2xl lg:text-3xl">2302308783</p>
            </li> */}
            <li>
              <h2 className="lg:text-2xl flex gap-2">
                <BsFillEnvelopeFill /> Email
              </h2>
              <p className="text-xl lg:text-3xl">Mateopedehonta@gmail.com</p>
            </li>
            <li>
              <h2 className="lg:text-2xl flex gap-2">
                <MdLocationOn /> Ubicacion
              </h2>
              <p className="text-2xl lg:text-3xl">Cordoba - Argentina</p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 p-2">
          <form
            ref={() => form}
            onSubmit={() => sendEmail}
            className="grid gap-2"
          >
            <div className="flex justify-between">
              <label className="bg-1 p-2 rounded-md w-1/2 mr-1" htmlFor="">
                Nombre <br />
                <input className="bg-1 w-full" type="text" name="user_name" />
              </label>
              <label className="bg-1 p-2 rounded-md w-1/2 ml-1" htmlFor="">
                Email <br />
                <input className="bg-1 w-full" type="text" name="from_email" />
              </label>
            </div>
            <label className="bg-1 p-2 rounded-md" htmlFor="">
              Proyecto/Empresa <br />
              <input className="bg-1 w-full" type="text" name="empresa" />
            </label>
            <label className="bg-1 p-2 rounded-md" htmlFor="">
              Mensaje <br />
              <textarea
                className="bg-1 w-full"
                name="message"
                // type="text"
              ></textarea>
            </label>
            <input
              className="px-2 py-1 bg-black text-white rounded-md hover:bg-slate-900 active:bg-white "
              type="submit"
              value="Enviar"
            />
          </form>
        </div>
      </div>
    </section>
  );
};
