import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Prizes from "@/components/sections/Prizes";
import Judges from "@/components/sections/Judges";
import Organizers from "@/components/sections/Organizers";
import Partners from "@/components/sections/Partners";
import Sponsors from "@/components/sections/Sponsors";
import FAQ from "@/components/sections/FAQ";

export default function Sections() {
  return (
    <div className="relative z-20 w-full">
      <About />
      <Tracks />
      <Prizes />
      <Judges />
      <Organizers />
      <Partners />
      <Sponsors />
      <FAQ />
    </div>
  );
}


