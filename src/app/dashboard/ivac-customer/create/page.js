import React from 'react'

export default function page() {
  return (
    <>
        <h1 className='text-3xl font-bold text-gray-800'>Create Ivac Customer</h1>
        <p className='text-gray-600'>This is the page where you can create a new Ivac customer.</p>
        <div>
            <div className='max-w-lg mt-4 rounded-lg p-6 border border-gray-300 shadow-lg'>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>Name</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='name' name='name' placeholder='Enter name' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>Email</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='email' id='email' name='email' placeholder='Enter email' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='phone'>Phone</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='phone' name='phone' placeholder='Enter phone number' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='address'>Address</label>
                    <input className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='address' name='address' placeholder='Enter address' />   
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='status'>Status</label>
                    <select className='w-full px-3 py-2 border border-gray-300 rounded' id='status' name='status'>
                        <option value='active'>Active</option>
                        <option value='inactive'>Inactive</option>
                    </select>
                </div>
                <button className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600'>Create Customer</button>
                
            </div>
        </div>
    </>
  )
}
