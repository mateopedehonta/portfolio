import { Contact, Home, MyService, ProjectList } from "@/components";

export default function homePage() {
  return (
    <div className="w-full">
      <Home />

      <ProjectList />

      <MyService />

      <Contact />
    </div>
  );
}
