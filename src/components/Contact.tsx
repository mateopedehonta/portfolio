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
  href: string;
}

const SocialLink = ({ icon, label, href }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="cursor-pointer bg-gray-300 w-11/12 p-4 flex items-center justify-between rounded-lg md:w-[400px] md:h-[68px] text_md text-gray-500"
    >
      <div className="flex gap-4 items-center">
        {icon}
        <p>{label}</p>
      </div>
      <ArrowUpRight size={22} fill="#3996DB" />
    </a>
  );
};
export const Contact = () => {
  return (
    <div className=" py-20 w-full h-[70vh] bg-[url('/bg/Contacts.png')] bg-no-repeat bg-cover flex flex-col items-center justify-around">
      <div className="text-center py-4 md:py-0">
        <h2 className="text-purple subtitle">Contaco</h2>
        <h3 className="tilte_md text-gray-600">¿Te gustó mi trabajo?</h3>
        <p className="text_md text-gray-500">
          ¡Ponte en contacto o sigue mis redes sociales!
        </p>
      </div>
      <div className="flex flex-col gap-6 items-center justify-center w-full">
        <SocialLink
          icon={<LinkedinLogo size={32} />}
          label="Linkedin"
          href="https://www.linkedin.com/in/mateo-pedehontaa/"
        />
        <SocialLink
          icon={<InstagramLogo size={32} />}
          label="Instagram"
          href="https://www.instagram.com/mateo.pedehontaa/"
        />
        <SocialLink
          icon={<GithubLogo size={32} />}
          label="GitHub"
          href="https://github.com/mateodev1"
        />
        <SocialLink
          icon={<EnvelopeSimple size={32} />}
          label="E-mail"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=mateopedehonta@gmail.com"
        />
      </div>
    </div>
  );
};
