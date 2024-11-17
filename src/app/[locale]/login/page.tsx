import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('Login');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href='/'>{t('homepageLink')}</Link>
    </>
  );
}
