"use client"
import { useParams } from 'next/navigation'
import { CustomerState } from '@/state/customerState'
import { useEffect } from 'react';
import { date } from 'zod';

export default function CustomerDetailsPage() {
    const { id } = useParams()
    const { customerData, getCustomerById } = CustomerState();
    useEffect(() => {
        (async () => {
            await getCustomerById(id);
        })()
    }, []);

    const handleDeviceStatusToggle = (deviceId) => {
        const updatedDevices = customerData.device.map((device) =>
            device.deviceId === deviceId
                ? { ...device, status: device.status === 'active' ? 'inactive' : 'active' }
                : device
        );
        // Here you can also make an API call to update the status in the backend if needed
    };

    return (
        <div>
            <h1 className='text-3xl font-bold text-gray-800 py-3'>Customer Details</h1>
            <div className='bg-white p-6 rounded shadow-md'>
                <div>
                    <table className='table-auto border border-gray-300'>
                        <tbody>
                        <tr>
                            <th>ID:</th>
                            <td>{customerData.id}</td>
                        </tr>
                        <tr>
                            <th>Name:</th>
                            <td>{customerData.name}</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>{customerData.email}</td>
                        </tr>
                        <tr>
                            <th>Mobile:</th>
                            <td>{customerData.mobile}</td>
                        </tr>
                        <tr>
                            <th>Address:</th>
                            <td>{customerData.address}</td>
                        </tr>
                        <tr>
                            <th>Device:</th>
                            <td>{customerData.device?.length || 0}</td>
                        </tr>
                        <tr>
                            <th>Status:</th>
                            <td>{customerData.status}</td>
                        </tr>
                        <tr>
                            <th>Created At:</th>
                            <td>{new Date(customerData.createdAt).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <th>Updated At:</th>
                            <td>{new Date(customerData.updatedAt).toLocaleString()}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h2 className='text-2xl font-bold text-gray-800 py-3 mt-4'>Associated Devices</h2>
                    <div>
                        <table className='min-w-full border border-gray-300'>
                            <thead className='bg-gray-200'>
                                <tr>
                                    <th>ID</th>
                                    <th>Device ID</th>
                                    <th>Device Type</th>
                                    <th>User Agent</th>
                                    <th>IP Address</th>
                                    <th>Browser</th>
                                    <th>OS</th>
                                    <th>Location</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    customerData.device && customerData.device.length > 0 ? (
                                        customerData.device.map((device, i) => (
                                            <tr key={device.id}>
                                                <td>{device.id}</td>
                                                <td>{device.deviceId}</td>
                                                <td>{device.deviceType}</td>
                                                <td>{device.userAgent}</td>
                                                <td>{device.ipAddress}</td>
                                                <td>{device.browser}</td>
                                                <td>{device.os}</td>
                                                <td>{device.country}</td>
                                                <td>
                                                    <div className='flex gap-1 items-center'>
                                                        <div className="flex items-center">
                                                            <span key={i} className='bg-gray-200 px-2 py-1 rounded mr-2'>{device.status}</span>
                                                            <label htmlFor={device.deviceId} className="relative cursor-pointer">
                                                                <input checked={device.status === 'active'} type="checkbox"
                                                                    onChange={() => {handleDeviceStatusToggle(device.deviceId)}} id={device.deviceId} className="sr-only peer" />
                                                                <div
                                                                    className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300"></div>
                                                                <div
                                                                    className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                                                            </label>
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (<tr><td colSpan="9" className="text-center">No devices associated with this customer.</td></tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
