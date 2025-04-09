import Image from "next/image";
import HeaderComponent from "./components/header";
import { HeroImage } from "./components/heroImage";
import { ReviewComponent } from "./components/review";

export default function Home() {
  return (
    <div className="h-screen bg-[#FAF4ED]">
      <header className="w-full h-[20%] bg-[#d4c9bb] flex justify-center items-center">
        <HeaderComponent />
      </header>
      <main>
        <section className=" w-full h-[400px] bg-red-500">
          <HeroImage />
        </section>
        <section className="w-full h-[250px] bg-red-400">
          <ReviewComponent />
        </section>
      </main>
    </div>
  );
}
