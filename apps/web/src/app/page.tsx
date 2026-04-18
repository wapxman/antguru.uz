import { Header } from '@/widgets/header/Header';
import { Footer } from '@/widgets/footer/Footer';
import { Hero } from '@/widgets/home/Hero';
import { Stats } from '@/widgets/home/Stats';
import { Categories } from '@/widgets/home/Categories';
import { HowItWorks } from '@/widgets/home/HowItWorks';
import { SpecialistCta } from '@/widgets/home/SpecialistCta';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Categories />
        <HowItWorks />
        <SpecialistCta />
      </main>
      <Footer />
    </>
  );
}
