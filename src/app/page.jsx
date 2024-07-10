import Image from "next/image";
import ClientLayout from "./clientLayout";
import Hero from "@/components/Hero";
import Support from "@/components/Support";
import CategoryShop from "@/components/shopCategory/CategoryShop";
import TheSale from "@/components/TheSale";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <Support />
      <CategoryShop />
      <TheSale />
      <Testimonials />
    </ClientLayout>
  );
}
