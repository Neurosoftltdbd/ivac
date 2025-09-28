"use client";
import { CustomerState } from '@/state/customerState';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react'

export default function CustomerPage() {
    const router = useRouter();

    const { getCustomerList, customerList } = CustomerState();
    useEffect(() => {
        (async () => {
            await getCustomerList();
        })()
    }, []);

    console.log(customerList);





    const handleCustomerStatusToggle = (userId, deviceId) => {
        const updatedUsers = ivacUsers.map((user) => {
            if (user.id === userId) {
                const updatedDevices = user.device.map((device) =>
                    device.deviceId === deviceId
                        ? { ...device, status: device.status === 'Active' ? 'Inactive' : 'Active' }
                        : device
                );
                return { ...user, device: updatedDevices };
            }
            return user;
        });
        setIvacUsers(updatedUsers);
        // Here you can also make an API call to update the status in the backend if needed
    }



    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col mb-3 '>
                    <h1 className='text-3xl font-bold text-gray-800 py-3'>Ivac Users Page</h1>
                    <p className='text-gray-600'>Manage your Ivac users and their devices here.</p>
                </div>
                <div>
                    <button onClick={() => { router.push('/dashboard/ivac-customer/create') }} className='bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 cursor-pointer'>Add New Customer</button>
                </div>
            </div>
            <hr />
            <div className='mt-4 h-[80vh] overflow-auto'>
                <table className='min-w-full border border-gray-300'>
                    <thead className='bg-gray-200'>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Address</th>
                            <th>Status</th>
                            <th>Device Count</th>
                            <th>Device id</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            customerList.map((customer, index) => {
                                return (<tr key={index}>
                                    <td>{customer.id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.email}</td>
                                    <td>{customer.mobile}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.status}</td>
                                    <td>{customer.device.length || 0}</td>
                                    <td className='border border-gray-300 px-4 py-2 flex flex-col gap-2'>
                                        {
                                            customer.device && customer.device.map((d, i) => (
                                                <div className='flex gap-1 items-center ' key={i}>
                                                    {/* <span key={i} className='bg-gray-200 px-2 py-1 rounded mr-2'>{d.deviceId}</span>
                                                    <input className='mr-2 cursor-pointer w-5 h-5'
                                                        checked={d.status === 'Active'} type="checkbox"
                                                        onChange={()=>{
                                                            handleCustomerStatusToggle(user.id, d.deviceId);
                                                        }}/> */}

                                                    <div className="flex items-center">
                                                        <span key={i} className='bg-gray-200 px-2 py-1 rounded mr-2'>{d.deviceId}</span>
                                                        <label htmlFor={d.deviceId} className="relative cursor-pointer">
                                                            <input checked={d.status === 'active'} type="checkbox"
                                                                onChange={() => {
                                                                    handleCustomerStatusToggle(user.id, d.deviceId);
                                                                }} id={d.deviceId} className="sr-only peer" />
                                                            <div
                                                                className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300"></div>
                                                            <div
                                                                className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                                                        </label>
                                                    </div>

                                                </div>
                                            ))
                                        }
                                    </td>
                                    <td className='text-center'>
                                        <button className='bg-green-500 text-white rounded px-2 py-1 mr-2 hover:bg-green-600 cursor-pointer'><i className='bi bi-pencil'></i></button>
                                        <button className='bg-red-500 text-white rounded px-2 py-1 mr-2 hover:bg-red-600 cursor-pointer'><i className='bi bi-trash'></i></button>
                                    </td>

                                </tr>)
                            })
                        }
                        

                    </tbody>
                </table>
            </div>
        </div>
    )
}
