import performanceimg from "/public/assets/performance.jpg";
import Hero from "@/components/hero";

export default function PerfomancePage() {
  return (
    <Hero
      imgData={performanceimg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
