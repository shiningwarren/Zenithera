import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}