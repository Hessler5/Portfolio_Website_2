
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Work from "@/components/sections/work";
import Projects from "@/components/sections/projects"
import Sewing from "@/components/sections/sewing";
import Directory from "@/components/sections/directory";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center px-4 gap-4 my-4 w-full">
      <div className="max-w-4xl">
        <Directory/>
        <About />
        <Skills />
        <Work />
        <Projects />
        <Sewing />
      </div>
    </div>
  );
}
