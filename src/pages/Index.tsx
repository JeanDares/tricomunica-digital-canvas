import About from "../components/About";
import BlogCallToAction from "../components/BlogCallToAction";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <BlogCallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
