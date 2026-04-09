import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/nextjs'

export default function SignInPage() {
  return (
    <div className='flex justify-center h-screen py-8 w-full bg-white'>
      <ClerkLoading>
        <p>Cargando...</p>
      </ClerkLoading>
      <ClerkLoaded>
        <div className='text-center w-fit space-y-4'>
          <h1 className='font-semibold text-3xl'>Welcome Back!</h1>
          <SignIn />
        </div>
      </ClerkLoaded>
    </div>
  )
}
