import Hero from './Hero';
import FAQComponent from './FAQ';
import Mission from './Mission';
import WhyChooseUs from './WhyChooseUs';
import OurPartners from './OurPatners';
import CTASection from './CTASection';

const Home = () => {
  return (
    <div className="custom-scrollbar">
      <Hero />
      <OurPartners />
      <WhyChooseUs />
      <Mission />
      <FAQComponent />
      <CTASection />
    </div>
  );
};

export default Home;
