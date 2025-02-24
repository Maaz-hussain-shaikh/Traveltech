import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import styles
import Hero from "./components/Hero"

config.autoAddCss = false;
export default function Home() {

  return (
    <>
     <Hero/>
    </>
     
  );
}
