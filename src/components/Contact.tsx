import {
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
  EnvelopeSimple,
  ArrowUpRight,
} from "@phosphor-icons/react/dist/ssr";
interface SocialLinkProps {
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ icon, label }: SocialLinkProps) => {
  return (
    <div className="bg-gray-300 p-4 flex items-center justify-between rounded-lg w-[400px] h-[68px] text_md text-gray-500">
      <div className="flex gap-4 items-center">
        {icon}
        <p>{label}</p>
      </div>
      <ArrowUpRight size={22} fill="#3996DB" />
    </div>
  );
};
export const Contact = () => {
  return (
    <div className=" py-20 w-full h-[70vh] bg-[url('/bg/Contacts.png')] bg-no-repeat bg-cover flex flex-col items-center justify-around">
      <div className="text-center">
        <h2 className="text-purple subtitle">Contaco</h2>
        <h3 className="tilte_md text-gray-600">¿Te gustó mi trabajo?</h3>
        <p className="text_md text-gray-500">
          ¡Ponte en contacto o sigue mis redes sociales!
        </p>
      </div>
      <div className="flex flex-col gap-6 ">
        <a
          href="https://www.linkedin.com/in/mateo-pedehontaa/"
          className="cursor-pointer"
          target="_blank"
        >
          <SocialLink icon={<LinkedinLogo size={32} />} label="Linkedin" />
        </a>
        <a
          href="https://www.instagram.com/mateo.pedehontaa/"
          className="cursor-pointer"
          target="_blank"
        >
          <SocialLink icon={<InstagramLogo size={32} />} label="Instagram" />
        </a>
        <a
          href="https://github.com/mateodev1"
          className="cursor-pointer"
          target="_blank"
        >
          <SocialLink icon={<GithubLogo size={32} />} label="GitHub" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mateopedehonta@gmail.com"
          className="cursor-pointer"
          target="_blank"
        >
          <SocialLink icon={<EnvelopeSimple size={32} />} label="E-mail" />
        </a>
      </div>
    </div>
  );
};
