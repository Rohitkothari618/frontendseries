import About from "../components/About";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import Frontend from "../components/Frontend";

// import data
import {
  headerData,
  heroData,
  navData,
  aboutData,
  frontendData,
  roadmapData,
  faqData,
} from "../../data.json";

export default function Home({
  headerData,
  heroData,
  navData,
  frontendData,
  faqData,
}) {
  return (
    <div className="overflow-hidden max-w-[1600px] mx-auto bg-white">
      <Hero headerData={headerData} heroData={heroData} navData={navData} />
      <About aboutData={aboutData} />
      <Frontend frontendData={frontendData} />
      <Roadmap roadmapData={roadmapData} />
      <Faq faqData={faqData} />
      <Footer />
    </div>
  );
}

// get data.json
export const getStaticProps = async () => {
  return {
    props: {
      headerData,
      navData,
      heroData,
      aboutData,
      frontendData,
      roadmapData,
      faqData,
    },
  };
};
