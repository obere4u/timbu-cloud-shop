import Image from "next/image";
import ClientLayout from "./clientLayout";
import Hero from "@/components/Hero";
import Support from "@/components/Support";
import CategoryShop from "@/components/shopCategory/CategoryShop";

export default function Home() {
  return (
    <ClientLayout>
      <Hero />
      <Support />
      <CategoryShop />
    </ClientLayout>
  );
}
