export interface NavLink {
  id: string;
  title: string;
  icon?: string;
}

export const NavList: NavLink[] = [
  {
    id: "section-sobreMi",
    title: "Sobre mi",
  },
  {
    id: "section-proyectos",
    title: "Proyectos",
  },
  {
    id: "section-contacto",
    title: "Contacto",
  },
];

