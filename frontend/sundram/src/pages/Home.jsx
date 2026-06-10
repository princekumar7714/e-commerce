
import HeroSlider from '../components/homepage/HeroSlider'
import Categories from '../components/homepage/Categories'
import BestSeller from '../components/homepage/BestSeller'
import OfferBanner from '../components/homepage/OfferBanner'
import OrganicSection from '../components/homepage/OrganicSection'
import PestDisease from '../components/homepage/PestDisease'
import SmartFarming from '../components/homepage/SmartFarming'
import AgricultureStats from '../components/homepage/AgricultureStats'
import ExclusiveOffers from '../components/homepage/ExclusiveOffers'
import SprayersSection from '../components/homepage/SprayersSection'

function Home() {
  return (
    <div>
      <HeroSlider />
      <Categories />
      <BestSeller />
      <ExclusiveOffers/>
      <PestDisease />
      <SmartFarming/>
      <OfferBanner />
      <SprayersSection/>
      <OrganicSection />
      <AgricultureStats/>
    </div>
  )
}

export default Home
