import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Login');

  return (
    <>
      <h1 className='text-center mb-[5rem] mt-4 px-4 text-4xl font-bold !leading-[1.5] sm:text-7xl'>
        {t('title')}
      </h1>
      <div className='flex justify-center'>
        <Link
          className='bg-white px-7 py-3 items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          href='/'
        >
          {t('homepageLink')}
        </Link>
      </div>
    </>
  );
}
