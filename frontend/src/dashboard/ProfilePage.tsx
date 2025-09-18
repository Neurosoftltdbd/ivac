import DashboardLayout from './DashboardLayout'
import {userState} from "../state/userState";
import {useEffect, useState} from "react";

export default function ProfilePage() {
    const {profileRead} = userState();
    const [userProfile, setUserProfile] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        phone: "",
        address: ""
    });
    useEffect(()=>{
        (async ()=>{
            const response = await profileRead();
            setUserProfile(response.data);
        })()
    },[])
  return (
    <DashboardLayout>
        <h1 className='text-3xl font-bold text-gray-800'>Profile Page</h1>
        <hr/>
        <div className='flex flex-col gap-4 w-[400px] p-4 my-4 rounded-lg shadow-lg'>
            <img src="/person.svg" className='w-16 h-16 border border-gray-300 p-3' alt="" />
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input value={userProfile.name} className='border border-gray-300 rounded bg-white py-2 px-3' type="text"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input value={userProfile.email} className='border border-gray-300 rounded bg-white py-2 px-3' type="email"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password">Password</label>
                <input value={userProfile.password} className='border border-gray-300 rounded bg-white py-2 px-3' type="text"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="phone">Phone</label>
                <input value={userProfile.phone} className='border border-gray-300 rounded bg-white py-2 px-3' type="tel"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="address">Address</label>
                <input value={userProfile.address} className='border border-gray-300 rounded bg-white py-2 px-3' type="text"/>
            </div>

            <button className='bg-green-600 text-white rounded px-4 py-2 cursor-pointer hover:bg-green-700 w-fit mx-auto'>Update</button>

        </div>
    </DashboardLayout>
  )
}
