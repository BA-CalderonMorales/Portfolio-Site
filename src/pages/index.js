import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = ({handleClick}) => {
  
  const handleScroll = (e) => {
    console.log(e);
    console.log("scrolled");
    setIsOpen(false);
  }

  return (
    <Layout onClick={e => handleClick(e)}>
        <div onScroll={(e) => handleScroll(e)}>
          <Section id="top" grid>
            <Hero />
            <BgAnimation />
          </Section>
          <Projects />
          <Technologies />
          <Timeline />
          <Acomplishments />
        </div>
        {/* <ToTop /> */}
    </Layout>
  );
};

export default Home;
