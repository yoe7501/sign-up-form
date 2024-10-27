'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import '../styles/style.css'
import { useRouter } from 'next/navigation'
const ThankYou = () => {
  const router = useRouter();
  const handleClick = () => [
    router.push('../')
  ]
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  return (
    <div className='flex flex-col justify-center gap-4 bg-white rounded-none  sm:rounded-3xl max-w-[504px] p-10 text-darkSlateGrey h-[100vh] sm:h-auto'>
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
        <h1 className="text-5xl font-semibold">Thanks for subscribing!</h1>
        <p >A confirmation email has been sent to {email}. Please open it and click the button inside to confirm your subscription</p>
        <button onClick={handleClick} className='button w-full'>Dismiss Message</button>
    </div>
  )
}

export default ThankYou