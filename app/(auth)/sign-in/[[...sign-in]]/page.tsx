import { SignIn } from '@clerk/nextjs'
import { useTranslations } from 'next-intl'

export default function SignInPage() {
  const t = useTranslations()
  return (
    <div className='space-y-4 shadow-md bg-white pt-4 rounded-md text-center flex flex-col items-center'>
      <img src={"/general/logo.png"} className='w-20 aspect-square' alt='LOGO' />
      <h1 className='text-2xl font-bold -mt-6'>{t('auth.title')}</h1>
      <SignIn
        appearance={{
          elements: {
            footer: { display: "none" },
            cardBox: { boxShadow: "none", width:"350px" },
            header: { display: "none" }
          }
        }}
      />
    </div>
  )
}
