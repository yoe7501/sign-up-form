'use client'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import '../styles/style.css'
import MobileImage from './MobileImage'
import DeskImage from './DeskImage'
import { useRouter } from 'next/navigation'

const schema = z.object({
    email: z.string().email()
})

type Input = z.infer<typeof schema>

const StayUpdated = () => {
    const router = useRouter();
    const {register, handleSubmit, formState:{errors}} = useForm<Input>({
        resolver: zodResolver(schema)
    })
    const onSubmit: SubmitHandler<Input> = (data) => {
        console.log(data);
        router.push(`./ThankYouPage?email=${encodeURIComponent(data.email)}`)
        
    }
    
  return (
    <div className='card'>
        <MobileImage/>
        <div className='innerCard'>
            <h1 className='text-center font-bold text-4xl'>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updated on:</p>
            <div className='check'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                <p className=''>Product discovery and building what matter</p>
            </div>
            <div className='check'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                <p className=''>Measureing to ensure updates are a success</p>
            </div>
            <div className='check'>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" strokeWidth="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                <p className=''>and much more!</p>
            </div>
            <form className='flex flex-col'>
                <div className={`flex ${errors.email? 'justify-between': ""}`}>
                <label className="font-medium text-sm my-2" htmlFor="email">Email address</label>
                {errors.email && <p className='text-tomato font-medium text-sm my-2'>Valid email required</p>}
                </div>
                <input  {...register('email')} type="text" className={`input ${errors.email? "border-1 border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500 focus:bg-red-200 bg-red-200 text-red-400" : "border-1 border-gray-200 ring-1 ring-gray-200 bg-white"}`} id='email' placeholder='email@company.com'  />
                <button onClick={handleSubmit(onSubmit)} type='submit' className='button'>Subscribe to monthly newsletter</button>
            </form>
        </div>
        <DeskImage/>
        
    </div>
  )
}

export default StayUpdated