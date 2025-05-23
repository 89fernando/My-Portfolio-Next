"use client";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";
import { calcularExperiencia } from "../lib/anosdeXp";
const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-0 xl:pb-3">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Fernando Soares</span>
            </h1>

            <p className="mb-9 text-white/80 text-xl">
              Frontend Developer with {calcularExperiencia()} of experience.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 mb-8">
              <a
                href="/assets/Currículo Profissional - Fernando Soares - 2025.pdf"
                download
                className="uppercase flex items-center gap-2 text-white hover:text-primary"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <FiDownload className="text-xl" />
                  Download CV - PT-BR
                </Button>
              </a>
              <a
                href="/assets/Professional CV - Fernando Soares - 2025.pdf"
                download
                className="uppercase flex items-center gap-2 text-white hover:text-primary"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  <FiDownload className="text-xl" />
                  Download CV - EN-US
                </Button>
              </a>
            </div>
            <div className="mb-8 xl:mb-0 flex justify-center xl:justify-start">
              <Social
                containerStyles="flex justify-center xl:justify-start gap-6"
                iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
