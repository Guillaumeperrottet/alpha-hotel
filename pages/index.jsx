import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/home/HeroSection';
import ContentSection from '../components/sections/home/ContentSection';
import ParallaxSection from '../components/sections/home/ParallaxSection';

export default function Home() {
  return (
    <Layout title="Alpha-Hôtel | Accueil">
      <HeroSection />

      <ContentSection title="lorem depsum">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </ContentSection>

      <ContentSection title="lorem depsum" reverse={true}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p>
      </ContentSection>

      <ParallaxSection title="Lorem depsum" imageSrc="/images/parallax-background.jpg">
        <p>Et eleifend nulla, molestie id tincidunt ut, duis aut...</p>
      </ParallaxSection>

    </Layout>
  );
}
