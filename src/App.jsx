import AboutSection from './components/AboutSection.jsx';
import AmenitiesSection from './components/AmenitiesSection.jsx';
import AttractionsSection from './components/AttractionsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <AttractionsSection />
        <AmenitiesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
