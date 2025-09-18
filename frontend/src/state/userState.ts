import {create} from "zustand";
import axios from "axios";

export interface UserProfileInterface{
    name:string,
    email:string,
    password:string,
    role:string,
    phone:string,
    address:string
}

interface userStateInterface{
    userForm:{email:string, password:string},
    userFormOnChange:(name:string, value:string)=>void,
    userLogin:(userData:object)=>Promise<{status:string, data:object}>,
    profileRead:()=>Promise<{status:string, data:UserProfileInterface}>
}
export const userState = create<userStateInterface>((set)=>({
    userForm:{email:'', password:''},
    userFormOnChange:(name:string, value:string)=>{
        set((state)=>({
                userForm:{
                    ...state.userForm,
                    [name]:value
                }
            }))
    },
    userLogin:async (userData)=>{
        const response = await axios.post('http://localhost:8080/api/v2/login', userData);
        return response.data;
    },
    profileRead:async ()=>{
        const response = await axios.get('http://localhost:8080/api/v2/profile');
        return response.data as {status:string, data:UserProfileInterface};
    }

}));