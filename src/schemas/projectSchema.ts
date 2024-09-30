import { z } from "zod";

export const ProjectFormSchema = z.object({
  images: z
    .array(
      z.object({
        url: z.string().url({ message: "Cada imagen debe ser una URL válida" }),
      }),
    )
    .min(1, { message: "Debes agregar al menos una URL de imagen" }),

  title: z.string().min(1, { message: "El título es requerido" }),
  description: z.string().min(1, { message: "La descripción es requerida" }),
  technologies: z
    .array(
      z.object({
        name: z.string(),
      }),
    )
    .min(1, { message: "Debes agregar al menos una tecnología" }),
  repositoryUrl: z
    .string()
    .url({ message: "El enlace al repositorio debe ser una URL válida" }),
  liveUrl: z
    .string()
    .url({ message: "El enlace en vivo debe ser una URL válida" })
    .optional(),

  isFeatured: z.boolean().optional(),
});
