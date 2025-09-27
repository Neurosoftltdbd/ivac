"use client"
import userState from '@/state/userState'
import React from 'react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function CreateUserPage() {
    const router = useRouter();
    const { userFormOnChange, userForm, createUser } = userState();
    const handleCreateUser = async () => {
        const response = await createUser(userForm);
        if (response.status === 'success') {
            router.push('/dashboard/profile');
            toast.success('User created successfully');
        } else {
            toast.error('Error creating user: ' + response.message);
        }
    }
    console.log("userForm:", userForm);


  return (
    <div>
        <h1 className='text-3xl font-bold text-gray-800'>Create User</h1>
        <p className='text-gray-600'>This is the create user page.</p>
        <hr/>
        <div className='flex flex-col gap-4 w-[400px] p-4 my-4 rounded-lg shadow-lg'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <input value={userForm.name} onChange={(e)=>{userFormOnChange('name', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="text"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <input value={userForm.email} onChange={(e)=>{userFormOnChange('email', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="email"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="password">Password</label>
                <input value={userForm.password} onChange={(e)=>{userFormOnChange('password', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' id="password" name="password"  type="password"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="mobile">Mobile</label>
                <input value={userForm.mobile} onChange={(e)=>{userFormOnChange('mobile', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' id="mobile" name="mobile" type="tel"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="address">Address</label>
                <input value={userForm.address} onChange={(e)=>{userFormOnChange('address', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' id="address" name="address" type="text"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="image">Image url</label>
                <input value={userForm.image} onChange={(e)=>{userFormOnChange('image', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' id="image" name="image" type="text"/>
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="status">Status</label>
                <select value={userForm.status} onChange={(e)=>{userFormOnChange('status', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3 w-full' name="status" id="status">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="role">Role</label>
                <select value={userForm.role} onChange={(e)=>{userFormOnChange('role', e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3 w-full' name="role" id="role">
                    <option selected value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <button onClick={handleCreateUser} className='bg-green-600 text-white rounded px-4 py-2 cursor-pointer hover:bg-green-700 w-fit mx-auto'>Create User</button>
        </div>
    </div>
  )
}
