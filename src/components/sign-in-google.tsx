import { signIn, auth, signOut } from '@/auth';
import { getTranslations } from 'next-intl/server';

export default async function SignInGoogle() {
  const t = await getTranslations('Login');
  const session = await auth();
  const user = session?.user;

  return user ? (
    <div className='flex flex-col items-center px-4'>
      <h1 className='text-2xl pb-2'>
        {t('welcome')} {user.name}{' '}
      </h1>
      <form
        action={async () => {
          'use server';
          await signOut();
        }}
      >
        <button
          className='bg-white px-7 py-3 items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          type='submit'
        >
          {t('logout')}
        </button>
      </form>
    </div>
  ) : (
    <div className='flex flex-col items-center px-4'>
      <h1 className='text-2xl pb-2'>{t('authMsg')}</h1>
      <form
        action={async () => {
          'use server';
          await signIn('google');
        }}
      >
        <button
          className='bg-white px-7 py-3 items-center justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
          type='submit'
        >
          {t('login')}
        </button>
      </form>
    </div>
  );
}
