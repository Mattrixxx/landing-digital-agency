import { useEffect } from "react";
import BlogsComp from "./components/BlogsComp/BlogsComp";
import BrandLogo from "./components/BrandLogo/BrandLogo";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
  }, []);
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black">
      <Navbar />
      <Hero />
      <BrandLogo />
      <Services />
      <BlogsComp />
      <Footer />
    </div>
  );
};

export default App;
