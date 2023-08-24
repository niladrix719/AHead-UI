import Navbar from "./components/navbar";
import Header from "./components/header";
import FamiliarCards from "./components/familiarCards";
import BioSection from "./components/bioSection";
import SelfImprovementSection from "./components/selfImprovementSection";
import SocialTest from "./components/socialTest";
import StartTest from "./components/startTest";
import WorkWithUs from "./components/workWithUs";
import OpenVacancies from "./components/openVacancies";
import Footer from './components/footer';

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
    
      <Navbar />

      <Header />

      <div className="flex justify-between items-start w-[85%] py-40">
        <div className="w-1/3">
          <h1 className="text-5xl font-semibold">EQ beats IQ</h1>
        </div>
        <div className="w-1/3">
          <p className="text-2xl text-zinc-600">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. they tend to be happier and have healthier relationships.
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-2xl text-zinc-600">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. they tend to be happier and have healthier relationships.
          </p>
        </div>
      </div>

      <FamiliarCards />

      <BioSection />

      <SelfImprovementSection />

      <div className="flex justify-between items-start w-[85%] py-40">
        <div className="w-1/3">
          <h1 className="text-5xl font-semibold">Be the best you with EQ</h1>
        </div>
        <div className="w-1/3">
          <p className="text-2xl text-zinc-600">
            Not having your emotions under control might be holding you back.
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-2xl text-zinc-600">
            Additionally not understanding those of others stops you from being parent, friend you can be.
          </p>
        </div>
      </div>

      <SocialTest />

      <StartTest />

      <WorkWithUs />

      <OpenVacancies />

      <Footer />

    </main>
  );
}
