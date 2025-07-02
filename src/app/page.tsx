import homeimg from "/public/assets/home.jpg";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <Hero
      imgAlt="Home Background Image"
      imgData={homeimg}
      title="Professional Cloud Hosting"
    />
  );
}
