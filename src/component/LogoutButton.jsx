'use client';
import userState from '@/state/userState';
import React from 'react'
import toast from 'react-hot-toast';

export default function LogoutButton() {
    const { logout } = userState();
    const handleLogout = () => {
        logout();
        cookieStore.delete('token');
        window.location.href = '/';
        toast.success('Logged out successfully');
    }
  return (
    <button onClick={handleLogout} className=' text-red-700 rounded px-4 py-2 cursor-pointer w-full'>Logout</button>
  )
}
