import './App.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { CompanyLogo } from './components/CompanyLogo'
import { Purpose } from './components/Purpose'
import { Features } from './components/Features'
import { Schedule } from './components/Schedule'
import { MonitorSection } from './components/MonitorSection'
import { PricingSection } from './components/PricingSection'
import { SupportSection } from './components/SupportSection'
import { Client } from './components/Client'
import { NewsLetter } from './components/NewsLetter'
import { Footer } from './components/Footer'
function App() {


  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/30 to-pink-500/80 rounded-full blur-[80px] -z-10"></div>
      <NavBar />
      <Hero />
      <CompanyLogo/>
      <Purpose/>
      <Features/>
      <Schedule/>
      <MonitorSection/>
      <PricingSection/>
      <SupportSection/>
      <Client/>
      <NewsLetter/>
      <Footer/>
    </main>

  )
}

export default App
