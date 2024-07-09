import Image from "next/image";
import ClientLayout from "./clientLayout";
import Hero from "@/components/Hero";
import Support from "@/components/Support";

export default function Home() {
  return (
    <ClientLayout>
        <Hero />
        <Support/>
     
    </ClientLayout>
  );
}
