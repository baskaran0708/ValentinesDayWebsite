import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import HeartRain from '@/components/HeartRain';

// Lazy load below-fold components for better initial performance
const PandaKiss = dynamic(() => import('@/components/PandaKiss'), {
  loading: () => <div className="min-h-[400px]" />,
});
const LoveLetter = dynamic(() => import('@/components/LoveLetter'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="min-h-[400px]" />,
});
const Countdown = dynamic(() => import('@/components/Countdown'), {
  loading: () => <div className="min-h-[400px]" />,
});
const LoveProposal = dynamic(() => import('@/components/LoveProposal'), {
  loading: () => <div className="min-h-[400px]" />,
});
const SecretMessage = dynamic(() => import('@/components/SecretMessage'));
const Footer = dynamic(() => import('@/components/Footer'));
const MusicPlayer = dynamic(() => import('@/components/MusicPlayer'));

export default function Home() {
  return (
    <main className="relative overflow-x-hidden min-h-screen flex flex-col w-full">
      {/* Navigation */}
      <Navigation />

      {/* Background Effects */}
      <HeartRain />

      {/* Main Content Sections - w-full so each spans full width and centers its content */}
      <div className="w-full">
        <HeroSection />
      </div>
      <div className="w-full">
        <PandaKiss />
      </div>
      <div className="w-full">
        <LoveLetter />
      </div>
      <div className="w-full">
        <Gallery />
      </div>
      <div className="w-full">
        <Countdown />
      </div>
      <div className="w-full">
        <LoveProposal />
      </div>

      {/* Footer - mt-auto keeps it at bottom on short viewports */}
      <div className="mt-auto w-full">
        <Footer />
      </div>

      {/* Floating UI Elements */}
      <SecretMessage />
      <MusicPlayer />
    </main>
  );
}
