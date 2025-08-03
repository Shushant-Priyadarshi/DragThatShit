import AboutTheExtension from "../components/landing/aboutExtension"
import BrandBelt from "../components/landing/brand-belt"
import Landing from "../components/landing/herosection"
import HowItWorks from "../components/landing/how-it-works"

const Home = () => {
  return (
    <div>
      <Landing/>
      <BrandBelt/>
      <AboutTheExtension/>
      <HowItWorks/>
    </div>
  )
}

export default Home