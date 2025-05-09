import { useLocale, useTranslations } from 'next-intl';
import { routing } from '@/i18n/routing';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <div className='absolute top-[80] right-7 bg-white bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-md flex items-center justify-center [@media(min-width:890px)]:top-6 hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950'>
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
        {routing.locales.map((cur) => (
          <option key={cur} value={cur}>
            {t('locale', { locale: cur })}
          </option>
        ))}
      </LocaleSwitcherSelect>
    </div>
  );
}
