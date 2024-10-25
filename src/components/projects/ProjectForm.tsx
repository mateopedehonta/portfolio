"use client";
import { addProject } from "@/actions/addProjects";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
} from "@/components";
import { ProjectFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

export const ProjectForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ProjectFormSchema>>({
    resolver: zodResolver(ProjectFormSchema),
    defaultValues: {
      title: "",
      images: [{ url: "" }],
      description: "",
      technologies: [{ name: "" }],
      repositoryUrl: "",
      liveUrl: "",
      isFeatured: false,
    },
  });
  const imagesField = useFieldArray({
    control: form.control,
    name: "images",
  });
  const techField = useFieldArray({
    control: form.control,
    name: "technologies",
  });

  const onSubmit = async (values: z.infer<typeof ProjectFormSchema>) => {
    // Aquí iría la lógica de envío del formulario
    const res = await addProject(values);
    console.log(res);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-96">
        <div className="space-y-4 w-full ">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Titulo</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="liveUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Live URL</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="repositoryUrl"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Repository URL</FormLabel>
                <FormControl>
                  <Input {...field} disabled={isPending} type="text" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="space-y-2">
            <Label className="font-bold text-lg"> Imagenes</Label>
            {imagesField.fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`images.${index}.url`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{index + 1} url de imagen</FormLabel>
                    <div className="flex gap-5">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          imagesField.remove(index);
                        }}
                        variant={"destructive"}
                        className="text-black"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <Button
              onClick={(e) => {
                e.preventDefault();
                imagesField.append({ url: "" });
              }}
              variant={"default"}
            >
              Agregar Imagen
            </Button>
          </div>
          <div className="space-y-2">
            <Label className="font-bold text-lg"> tecnologias</Label>
            {techField.fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`technologies.${index}.name`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tecnologia {index + 1} </FormLabel>
                    <div className="flex gap-5">
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          techField.remove(index);
                        }}
                        variant={"destructive"}
                        className="text-black"
                      >
                        Eliminar
                      </Button>
                    </div>
                  </FormItem>
                )}
              />
            ))}
            <Button
              onClick={(e) => {
                e.preventDefault();
                techField.append({ name: "" });
              }}
            >
              Agregar tecnologia
            </Button>
          </div>
        </div>

        <Button
          disabled={isPending}
          type="submit"
          className="mt-5 w-full bg-[#4BB543] text-black"
        >
          Crear Proyecto
        </Button>
      </form>
    </Form>
  );
};
