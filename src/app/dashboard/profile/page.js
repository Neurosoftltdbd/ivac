"use client"
import React from 'react'
import userState from "@/state/userState";
import {useEffect} from "react";
import {toast} from "react-hot-toast";
import { isAdmin } from '@/lib/utility';
import Link from 'next/link';
export default function page() {
    const {profileRead, profileData, profileUpdate, userFormOnChange, userForm} = userState();
    useEffect(()=>{
        (async ()=>{
            await profileRead();
        })()
    },[]);

    console.log("Profile Data: ", profileData);

    const handleProfileUpdate = async () => {
        const response = await profileUpdate({
            email: userForm.email,
            name: userForm.name,
            mobile: userForm.mobile,
            address: userForm.address,
            password: userForm.password
        });
        if(response.status === "success"){
            toast.success('Profile updated successfully');
        }else {
            toast.error('Profile update failed');
        }
    }
    

  return (
    <>
            <div className='flex justify-between items-center mb-4'>
                <h1 className='text-3xl font-bold text-gray-800'>Profile Page</h1>
                {isAdmin && <button className='bg-green-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-700'><Link href="/dashboard/profile/create">Create User</Link></button>}
            </div>
            <hr/>
            <div className='flex gap-8 my-4'>
                <div className='flex flex-col gap-4 w-[400px] p-4 my-4 rounded-lg shadow-lg'>
                <img src={profileData.image || '/person.svg'} className='w-16 h-16 border border-gray-300 p-3' alt="" />
                <span className='bg-gray-200 rounded-sm py-1 px-3 w-fit'>{profileData.role && profileData.role.replace(/^./, char => char.toUpperCase())}</span>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <input value={userForm.name || ''} onChange={(e)=>{userFormOnChange("name", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="text"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="email">Email</label>
                    <input value={userForm.email || ''} onChange={(e)=>{userFormOnChange("email", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="email"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="password">Password</label>
                    <input value={userForm.password || ''} onChange={(e)=>{userFormOnChange("password", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' id="password" name="password"  type="password"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="phone">Phone</label>
                    <input value={userForm.mobile || ''} onChange={(e)=>{userFormOnChange("mobile", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="tel"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="address">Address</label>
                    <input value={userForm.address || ''} onChange={(e)=>{userFormOnChange("address", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="text"/>
                </div>

                <button onClick={handleProfileUpdate} className='bg-green-600 text-white rounded px-4 py-2 cursor-pointer hover:bg-green-700 w-fit mx-auto'>Update</button>

            </div>
            
            </div>
    </>
  )
}
