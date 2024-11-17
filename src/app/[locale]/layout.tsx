import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import '../globals.css';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TNR | Save a life',
  description:
    'Uniting the community for the trap, neuter, and return of local strays',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className='bg-[#d7dbfc] absolute top-[-6rem] -z-10 right-[1rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#9474629d]'></div>
        <div className='bg-[#fbead7] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394bd]'></div>
        <NextIntlClientProvider messages={messages}>
          <ThemeContextProvider>
            {children}
            <ThemeSwitch />
          </ThemeContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
