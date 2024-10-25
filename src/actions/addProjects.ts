"use server";

import { ProjectFormSchema } from "@/schemas";
import prisma from "@/utils/db";
import { z } from "zod";

export const addProject = async (data: z.infer<typeof ProjectFormSchema>) => {
  try {
    const project = await prisma.project.create({
      data: {
        ...data,
        images: data.images.map((i) => i.url),
        technologies: data.technologies.map((i) => i.name),
      },
    });
    return project;
  } catch (error) {
    console.log(error);
    return [];
  }
};
