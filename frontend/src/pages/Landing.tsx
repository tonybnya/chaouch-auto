import LandingHero from "@/components/LandingHero";
import Intro from "@/components/Intro";
import LandingTestimonials from "@/components/LandingTestimonials";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white w-full">
      <main className="">
        <LandingHero />

        <Intro />

        <LandingTestimonials />
      </main>
    </div>
  );
};

export default Landing;
