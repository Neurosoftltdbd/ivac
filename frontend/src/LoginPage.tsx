
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {userState} from "./state/userState.ts";

export let isAdmin = false;
export default function LoginPage() {
  const navigate = useNavigate();
  const {userForm,userFormOnChange, userLogin} = userState();



  const handleLogin = async () => {
    if (userForm.email !== "" && userForm.password !== "") {
        const response = await userLogin(userForm);
        if(response.status === "success"){
            navigate('/dashboard');
            console.log('user data: ', userForm);
            toast.success('Login successful');
        }else {
            toast.error('Login failed');
        }
    }else{
      toast.error('Please fill all the fields');
    }
  }

  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className='w-[400px] bg-gray-300 p-8 rounded shadow-lg'>
          <h2 className='text-3xl text-green-700 my-2'>Login to Admin Area</h2>
          <div className="flex flex-col gap-4 p-3 w-full">
            <input value={userForm.email} onChange={(e)=>{userFormOnChange("email", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="email" placeholder='Enter email address'/>
            <input value={userForm.password} onChange={(e)=>{userFormOnChange("password", e.target.value)}} className='border border-gray-300 rounded bg-white py-2 px-3' type="password" placeholder='Enter password'/>
            <button onClick={handleLogin} className='bg-green-600 text-white rounded px-4 py-2 cursor-pointer hover:bg-green-700 w-fit mx-auto'>Login</button>
          </div>
        </div>
      </div>
  )
}
