"use client"
import { isAdmin } from '@/lib/utility';
import userState from '@/state/userState';
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function UserListPage() {
        const {getUserList, userList} = userState();
    useEffect(()=>{
        (async ()=>{
            if(isAdmin()){
                await getUserList();
            }
        })()
    },[]);



  return (
    <div>
        <div className='flex justify-between items-center mb-4'>
            <h1 className='text-3xl font-bold text-gray-800 mb-4'>User List</h1>
            <button className='bg-green-600 text-white py-2 px-4 rounded cursor-pointer hover:bg-green-700'><a href="/dashboard/profile/create">Create User</a></button>
        </div>
        <table className='table table-auto border border-gray-300 w-full'>
            <thead className='bg-gray-300'>
                <tr className='text-center py-2 border-b border-gray-300'>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Mobile</th>
                    <th>Address</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className=''>
                {
                    isAdmin && userList.map((user, index)=>{
                        return(
                            <tr key={index} className='border-b border-gray-300 hover:bg-gray-100 py-2'>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.mobile}</td>
                                <td>{user.address}</td>
                                <td className='text-center'>{user.status === 'active' ? <span className='bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm'>Active</span> : <span className='bg-red-200 text-red-800 px-2 py-1 rounded-full text-sm'>Inactive</span>}</td>
                                <td className='text-center'>
                                    <Link className='bg-green-600 text-white px-2 py-1 rounded cursor-pointer hover:bg-green-700' href={`/dashboard/profile/${user.id}`}>Edit</Link>
                                    </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
