import React from 'react';
import Navbar from './components/navbar';
import Header from './components/header';
import FamiliarCards from './components/familiarCards';
import BioSection from './components/bioSection';
import SelfImprovementSection from './components/selfImprovementSection';
import SocialTest from './components/socialTest';
import StartTest from './components/startTest';
import WorkWithUs from './components/workWithUs';
import OpenVacancies from './components/openVacancies';
import Footer from './components/footer';

type TextProps = {
  text: string;
};

function SectionTitle({ text }: TextProps) {
  return <h1 className="text-4xl font-semibold w-1/3">{text}</h1>;
}

function SectionText({ text }: TextProps) {
  return <p className="text-2xl text-zinc-600 w-1/3">{text}</p>;
}

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <Navbar />
      <Header />

      <div className="flex justify-between items-start w-[85%] py-40">
        <SectionTitle text="EQ beats IQ" />
        <SectionText text="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships." />
        <SectionText text="People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships." />
      </div>

      <FamiliarCards />
      <BioSection />
      <SelfImprovementSection />

      <div className="flex justify-between items-start w-[85%] py-40">
        <SectionTitle text="Be the best you with EQ" />
        <SectionText text="Not having your emotions under control might be holding you back." />
        <SectionText text="Additionally not understanding those of others stops you from being the parent, friend you can be." />
      </div>

      <SocialTest />
      <StartTest />
      <WorkWithUs />
      <OpenVacancies />
      <Footer />
    </main>
  );
}
