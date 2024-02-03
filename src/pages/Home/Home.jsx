import { Footer } from 'components/Footer/Footer';
import { Description } from '../../components/Description/Description';
import Hero from '../../components/Hero/Hero';
const Home = () => {
  return (
    <>
      <Hero />
      <div>
        <Description />
      </div>
      <Footer />
    </>
  );
};

export default Home;
