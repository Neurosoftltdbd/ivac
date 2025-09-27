import Link from 'next/link'
import React from 'react'
import LogoutButton from '@/component/LogoutButton';

export default function layout({ children }) {
    const sideBarLinks = [
        {name: 'Home', path: '/'},
        {name:"Ivac Customer", path:"/dashboard/ivac-customer"},
        {name:"Ivac Code", path:"/dashboard/ivac-code"},
        {name: 'Profile', path: '/dashboard/profile'},
        {name: 'Settings', path: '/dashboard/settings'},
    ]


  return (
    <div className='min-h-screen flex w-full'>
        <div className='flex flex-col justify-between w-60 bg-green-800 text-white p-2'>
            <div>
                <h2 className='text-xl font-bold text-center py-2'><Link href="/dashboard">Dashboard</Link></h2>
            <hr/>
            <ul className='flex flex-col gap-2 mt-4'>
                {
                    sideBarLinks.map((link, i)=>(<li className='flex bg-white hover:bg-gray-200 cursor-pointer py-2 px-4 text-green-900 rounded transition-all duration-500 ease-in-out' key={i}><Link className='w-full' href={link.path}>{link.name}</Link></li>))
                }
            </ul>
            </div>
            <div className='flex flex-col items-center p-2 w-full rounded-md bg-gray-200'>
                <hr />
                <LogoutButton />
            </div>
        </div>
        <div className='flex-1 p-4'>
            {children}
        </div>
    </div>
  )
}
