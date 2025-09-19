import About from "@/components/sections/About";
import Tracks from "@/components/sections/Tracks";
import Prizes from "@/components/sections/Prizes";
import Judges from "@/components/sections/Judges";
import Organizers from "@/components/sections/Organizers";
import Partners from "@/components/sections/Partners";
import Sponsors from "@/components/sections/Sponsors";
import FAQ from "@/components/sections/FAQ";
import StudentCoordinators from "./sections/StudentCoordinators";
import FacultyCoordinators from "./sections/FacultyCoordinators";

export default function Sections() {
  return (
    <div className="relative z-20 w-full px-4 sm:px-6">
      <About />
      <Tracks />
      <Prizes />
      <Judges />
      <Organizers />
      <FacultyCoordinators />
      <StudentCoordinators />
      <Partners />
      <Sponsors />
      <FAQ />
    </div>
  );
}
