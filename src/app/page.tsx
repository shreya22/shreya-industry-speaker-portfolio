import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Teaching } from "@/components/sections/teaching";
import { SpeakingTopics } from "@/components/sections/speaking-topics";
import { Community } from "@/components/sections/community";
import { Experience } from "@/components/sections/experience";
import { Testimonials } from "@/components/sections/testimonials";
import { Invite } from "@/components/sections/invite";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Teaching />
        <SpeakingTopics />
        <Community />
        <Experience />
        <Testimonials />
        <Invite />
      </main>
      <Footer />
    </>
  );
}
