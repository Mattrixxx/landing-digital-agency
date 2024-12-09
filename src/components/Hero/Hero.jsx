import React from "react";
import HeroImg from "../../assets/website/team.jpg";

const Hero = () => {
  return (
    <>
      <main className="bg-white dark:bg-gray-950 dark:text-white transition-all">
        <div className="container min-h-[620px] flex mt-10 md:mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 place-items-center">
            {/* Image Section */}
            <div
              data-aos="zoom-in"
              className="order-1 md:order-2"
            >
              <img src={HeroImg} alt="HeroImg" className="rounded-3xl" />
            </div>
            {/* Text Content Section */}
            <div className="space-y-5 order-2 md:order-1">
              <h1
                data-aos="fade-up"
                className="text-4xl md:text-5xl font-semibold"
              >
                Building Brands in the{" "}
                <span className="text-primary">Degital Agency</span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Your partner in navigating the ever-evolving landscape of
                digital maketing. From conceptualization to execution, we craft
                tailored solutions that drive results and elevate your brand to
                new heights.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="500"
                className="btn-primary"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
