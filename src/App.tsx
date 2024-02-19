import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Navbar from "@/scenes/Navbar/Navbar";
import Home from "@/scenes/Home/Home";
import BenefitsList from "@/scenes/Benefits/BenefitsList";
import OurClassesList from "./scenes/OurClasses/OurClassesList";
import ContactUs from "./scenes/ContactUs/ContactUs";
import Footer from "./scenes/Footer";




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <BenefitsList setSelectedPage={setSelectedPage}/>
      <OurClassesList setSelectedPage={setSelectedPage}/>
      <ContactUs setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  );
}

export default App;
