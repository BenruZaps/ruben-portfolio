import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-x-hidden">
      {/* Bokeh Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="bokeh-circle bokeh-1"></div>
        <div className="bokeh-circle bokeh-2"></div>
        <div className="bokeh-circle bokeh-3"></div>
        <div className="bokeh-circle bokeh-4"></div>
        <div className="bokeh-circle bokeh-5"></div>
        <div className="bokeh-circle bokeh-6"></div>
      </div>

      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
