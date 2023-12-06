import { BsGithub ,BsLinkedin,BsInstagram} from "react-icons/bs";
export const Networks = () => {
  return (
    // orientation="left"
    <div  className="hidden lg:flex side">
      <ul className="text-3xl flex flex-col gap-4 fade">
        <li className="m-0-auto">
          <a
            target="_blank"
            className="flex flex-row gap-1"
            href="https://github.com/mateopedehonta"
          >
            <BsGithub/>
          </a>
        </li>
        <li className="m-0-auto">
          <a
            target="_blank"
            className="flex flex-row gap-1"
            href="https://www.linkedin.com/in/mateo-pedehontaa/"
          >
            <BsLinkedin/>
          </a>
        </li>
        <li className="m-0-auto">
          <a
            target="_blank"
            className="flex flex-row gap-1"
            href="https://www.instagram.com/mateo.pedehontaa/"
          >
            <BsInstagram/>
          </a>
        </li>
      </ul>
    </div>
  );
};
