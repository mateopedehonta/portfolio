import {
  Button,
  NavList,
  Sheet,
  SheetContent,
  SheetTrigger,
  Label,
  NavLink,
 
} from "..";
import { Icon } from "@iconify/react";

export const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger className="flex lg:hidden p-4 fixed right-0 ">
        <Button className="bg-1 p-[6px] w-[50px] h-[50px]">
          <Icon icon="ion:menu" className="text-5xl " />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-1 flex flex-col justify-center">
          {NavList.map(({ id, title }: NavLink) => (
            <a href={`#${id}`} className="text-white text-xl bg-black py-2 rounded-md flex justify-center hover:bg-white hover:text-black">
              <Label>{title}</Label>
            </a>
          ))}
      </SheetContent>
    </Sheet>
  );
};
