import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
// import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex flex-col 
    justify-center items-center mx-auto overflow-clip">
      <div className="w-full mx-auto"> {/*className="max-w-7xl w-full"*/}
        <FloatingNav navItems={navItems} />
        <Hero />
        {/*<About />*/}
        <Grid />
        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        {/* <Approach /> */}
        <Footer />
      </div>
    </main>
  );
}
