import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-24" // Added pt-24 for navbar spacing, min-h-[90vh] for more space
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Chandan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Choudhury
            </span>
          </h1>

          {/* Photo Section */}
          <div className="flex justify-center">
            <img
              src="/projects/Chandan.jpg"
              alt="Chandan Choudhury"
              className="h-50 w-40 object-cover rounded-2xl border-4 border-primary shadow-xl transition-transform duration-300 hover:scale-105"
              style={{ aspectRatio: "4/5" }}
            />
          </div>

          <p
            style={{ fontFamily: "'Montserrat', sans-serif" }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 tracking-wide">
            I'm an Aspiring developer driven by web and data.
            <br />
            Eager to learn and contribute, I enjoy working on projects that
            solve real-world problems and help me grow as a tech professional.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 mb-32">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
