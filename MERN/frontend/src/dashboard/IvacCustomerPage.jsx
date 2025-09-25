
import { useNavigate } from 'react-router-dom';
import DashboardLayout from './DashboardLayout.jsx'

export default function IvacCustomerPage() {
    const navigate = useNavigate();


    const ivacUsers = [
        {id:1, name:'John Doe', email:'user@ivacbd.com', role:'Admin', status:'Active', deviceId:['12345', '67890']},
        {id:2, name:'Jane Smith', email:'   ', role:'User', status:'Inactive', deviceId:['54321']},
        {id:3, name:'Alice Johnson', email:'    ', role:'User', status:'Active', deviceId:[]},
        {id:4, name:'Bob Brown', email:'   ', role:'User', status:'Active', deviceId:['98765', '43210']},
    ];
    return (
        <DashboardLayout>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col mb-3 '>
                        <h1 className='text-3xl font-bold text-gray-800 py-3'>Ivac Users Page</h1>
                    <p className='text-gray-600'>Manage your Ivac users and their devices here.</p>
                    </div>
                    <div>
                        <button onClick={()=>{navigate('/create-ivac-customer')}} className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600'>Add New User</button>
                    </div>
                </div>
                <hr />
                <div className='mt-4'>
                    <table className='min-w-full border border-gray-300'>
                        <thead className='bg-gray-200'>
                            <tr>
                                <th className='border border-gray-300 px-4 py-2'>ID</th>
                                <th className='border border-gray-300 px-4 py-2'>Name</th>
                                <th className='border border-gray-300 px-4 py-2'>Email</th>
                                <th className='border border-gray-300 px-4 py-2'>Role</th>
                                <th className='border border-gray-300 px-4 py-2'>Status</th>
                                <th className='border border-gray-300 px-4 py-2'>Device Count</th>
                                <th className='border border-gray-300 px-4 py-2'>Device id</th>
                                <th className='border border-gray-300 px-4 py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                ivacUsers.map((user, i)=>(
                                    <tr key={i} className={i%2===0?'bg-white':'bg-gray-100'}>
                                <td className='border border-gray-300 px-4 py-2'>{user.id}</td>
                                <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                                <td className='border border-gray-300 px-4 py-2'>{user.email}</td>
                                <td className='border border-gray-300 px-4 py-2'>{user.role}</td>
                                <td className='border border-gray-300 px-4 py-2'>{user.status}</td>
                                <td className='border border-gray-300 px-4 py-2'>{user.deviceId.length}</td>
                                <td className='border border-gray-300 px-4 py-2 flex flex-col gap-2'>
                                    {
                                        user.deviceId && user.deviceId.map((deviceId, i)=>(
                                            <div className='flex gap-1 items-center'>
                                                <span key={i}
                                                      className='bg-gray-200 px-2 py-1 rounded mr-2'>{deviceId}</span>
                                                <input className='mr-2 cursor-pointer w-5 h-5'
                                                       checked={user.status === 'Active'} type="checkbox"/>

                                                {/*<div className="flex items-center">*/}
                                                {/*    <label htmlFor="toggle" className="relative cursor-pointer">*/}
                                                {/*        <input type="checkbox" id="toggle" className="sr-only peer"/>*/}
                                                {/*        <div*/}
                                                {/*            className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-300"></div>*/}
                                                {/*        <div*/}
                                                {/*            className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>*/}
                                                {/*    </label>*/}
                                                {/*    <span*/}
                                                {/*        className="ml-3 text-sm font-medium text-gray-700">Toggle me!</span>*/}
                                                {/*</div>*/}

                                            </div>
                                        ))
                                    }
                                </td>
                                        <td className='border border-gray-300 px-4 py-2 w-24'>
                                            <button
                                                className='bg-blue-500 text-white rounded px-2 py-1 mr-2 hover:bg-blue-600'>Edit
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </DashboardLayout>
    )
}
