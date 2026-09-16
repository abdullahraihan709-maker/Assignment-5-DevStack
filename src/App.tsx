import Nav from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/Explore_The_Technologies/TechCard.tsx";
import { Suspense } from "react";
import type { TTechCard } from "./types/techDataType.ts";


const techCardDataFetch = async (): Promise<TTechCard[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};



function App() {
  const techCardPromise = techCardDataFetch();


  return (
    <>
      <Nav />
      <Hero/>
      <Suspense fallback={<p>Loading...</p>}>
        <TechCard techCardPromise={techCardPromise} />
      </Suspense>
    </>
  )
}

export default App
