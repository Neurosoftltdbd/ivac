import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='h-screen flex justify-center items-center bg-gray-300 absolute top-0 left-0 right-0 bottom-0'>
        <div className='text-center'>
            <h1 className='text-3xl font-bold text-gray-800'>Page Not Found</h1>
            <p className='text-gray-600'>The page you are looking for does not exist.</p>
            <p className='text-gray-600'>Thank you for your understanding.</p>
            <p className='text-gray-600'>Have a nice day!</p>
            <Link href="/" className='text-blue-500 hover:underline'>Go Home</Link>
        </div>
    </div>
  )
}
