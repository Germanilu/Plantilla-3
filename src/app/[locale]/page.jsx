import { useTranslations } from "next-intl";
import Map from "@/app/[locale]/components/google-map-location/index";
import Hero from "./components/hero";
import Contact from "./components/contact";
import ScrollToTop from "@/app/[locale]/components/scroll-to-top/index";
import './page.scss';

export const metadata = {
  title:"Home title",
  description:"home metadata description"
}

export default function Home() {
  const t = useTranslations("Home");

  return (
    <div className='home-design'>
      <div className="hero-section">
        <Hero/>
      </div>
      <div className="first-section">
        <Contact/>
      </div>
      <div className="second-section">
        
      </div>
      
      <ScrollToTop />
    </div>
  )
}

