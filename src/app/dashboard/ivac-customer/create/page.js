"use client"
import { useRouter } from 'next/navigation';
import { CustomerState } from '@/state/customerState';
import toast from 'react-hot-toast';


export default function CreateCustomerPage() {
    const router = useRouter();
    const { customerForm, customerFormOnChange, createCustomer } = CustomerState();

    const handleCreateCustomer = async () => {
        if(!customerForm.name || !customerForm.email || !customerForm.mobile || !customerForm.address){
            toast.error("All fields are required");
            return;
        }
        const response = await createCustomer(customerForm);
        if (response.status === 'success') {
            toast.success(response.message);
            customerFormOnChange('name', '');
            customerFormOnChange('email', '');
            customerFormOnChange('mobile', '');
            customerFormOnChange('address', '');
            customerFormOnChange('status', 'active');
            router.push('/dashboard/ivac-customer');
        } else {
            toast.error(response.message);
        }
    }


  return (
    <div>
        <h1 className='text-3xl font-bold text-gray-800'>Create Ivac Customer</h1>
        <p className='text-gray-600'>This is the page where you can create a new Ivac customer.</p>
        <div>
            <div className='max-w-lg mt-4 rounded-lg p-6 border border-gray-300 shadow-lg'>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='name'>Name</label>
                    <input value={customerForm.name} onChange={(e)=>{customerFormOnChange("name", e.target.value)}} className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='name' name='name' placeholder='Enter name' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='email'>Email</label>
                    <input value={customerForm.email} onChange={(e)=>{customerFormOnChange("email",e.target.value)}} className='w-full px-3 py-2 border border-gray-300 rounded' type='email' id='email' name='email' placeholder='Enter email' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='mobile'>Mobile</label>
                    <input value={customerForm.mobile} onChange={(e)=>{customerFormOnChange("mobile", e.target.value)}} className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='mobile' name='mobile' placeholder='Enter phone number' />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='address'>Address</label>
                    <input value={customerForm.address} onChange={(e)=>{customerFormOnChange("address", e.target.value)}} className='w-full px-3 py-2 border border-gray-300 rounded' type='text' id='address' name='address' placeholder='Enter address' />   
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 font-bold mb-2' htmlFor='status'>Status</label>
                    <select value={customerForm.status}  onChange={(e)=>{customerFormOnChange("status", e.target.value)}} className='w-full px-3 py-2 border border-gray-300 rounded' id='status' name='status'>
                        <option value='active'>Active</option>
                        <option value='inactive'>Inactive</option>
                    </select>
                </div>
                <button onClick={handleCreateCustomer} className='bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-600'>Create Customer</button>
                
            </div>
        </div>
    </div>
  )
}
