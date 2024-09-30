"use server";

import prisma from "@/utils/db";

export const getCategories = async () => {
  try {
    return await prisma.project.findMany({});
  } catch (error) {
    console.log(error);
    return [];
  }
};
