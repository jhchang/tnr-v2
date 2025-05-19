import Adoption from '@/components/adoption';
import Donation from '@/components/donation';
import Intro from '@/components/intro';
import ProsTNR from '@/components/pros-tnr';
import SectionDivider from '@/components/section-divider';
import { TailwindIndicator } from '@/components/tailwind-indicator';

export default function Home() {
  return (
    <main className='flex flex-col items-center px-4'>
      <TailwindIndicator />
      <Intro />
      <SectionDivider />
      <ProsTNR />
      <Adoption />
      <Donation />
    </main>
  );
}
