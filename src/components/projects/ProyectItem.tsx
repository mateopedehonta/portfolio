import { project } from "@prisma/client";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import Link from "next/link";

export const ProyectItem = ({
  images,
  description,
  title,
  liveUrl,
  repositoryUrl,
  technologies,
  isFeatured,
}: project) => {
  return (
    // <div>
    <Dialog>
      <DialogTrigger className="w-[330px] h-[280px] bg-gray-300 rounded-xl flex flex-col p-3 gap-6 transition-transform transform hover:scale-105 ">
        <Image
          src={images[0]}
          alt=""
          className="w-[306px] h-[156px] rounded-xl"
          width={10}
          height={10}
        />
        <div className="p-1">
          <h1 className="text-gray-600 title_sm capitalize">{title}</h1>
          <p className="text-gray-500 text_sm">{description}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-gray-800 text-white w-full max-w-3xl h-[60%] p-6 rounded-lg flex flex-col items-center">
        <Image
          src={images[0]}
          alt={title}
          className="w-auto h-1/2 rounded-xl mb-4"
          width={400}
          height={400}
        />
        <DialogHeader className="text-center mb-4 h-full">
          <DialogTitle className="text-2xl font-semibold mb-2">
            {title}
          </DialogTitle>
          <DialogDescription className="text-sm text-gray-50">
            {description}
            <div className="mt-2 space-y-1">
              <p>
                <Link href={liveUrl!} className="text-blue-400 hover:underline">
                  Live Demo
                </Link>
              </p>
              <p>
                <a
                  href={repositoryUrl}
                  className="text-blue-400 hover:underline"
                >
                  Repository
                </a>
              </p>
              <p>
                <span className="text-gray-400">Technologies:</span>{" "}
                {technologies.join(", ")}
              </p>
              <p>
                <span className="text-gray-400">Featured:</span>{" "}
                {isFeatured ? "Yes" : "No"}
              </p>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
