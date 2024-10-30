"use client";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

const Technologies = [
  { title: "GitHub", color: "white" },
  { title: "HTML", color: "red" },
  { title: "CSS", color: "blue" },
  { title: "JavaScript", color: "yellow" },
  { title: "React", color: "blue" },
  { title: "Node.js", color: "green" },
];

export function CarouselSkills() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  return (
    <Carousel
      className="w-full md:w-max py-5"
      plugins={[plugin.current]}
      opts={{ loop: true, dragFree: true, containScroll: "keepSnaps" }}
    >
      <CarouselContent className="-ml-1 gap-4 ">
        {Technologies.map(({ color, title }) => (
          <CarouselItem
            key={title}
            className="pl-1 basis-1/6 flex justify-center items-center  bg-gray-300 py-3 px-6 rounded-3xl gap-3 min-w-min"
          >
            <Image
              src={`/icons/${title}.svg`}
              className={` w-auto h-[20px] bg-${color}`}
              width={20}
              height={20}
              alt=""
            />
            <p className="text-white">{title}</p>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
