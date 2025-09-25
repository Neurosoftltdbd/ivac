import {create} from "zustand";
import axios from "axios";

interface userStateInterface{
    userForm:{email:string, password:string},
    userFormOnChange:(name:string, value:string)=>void,
    userLogin:(userData:object)=>Promise<{status:string, data:object}>,
    profileData:{name:string, email:string, password:string},
    profileRead:()=>Promise<{status:string, data:object}>
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
    profileData:{},
    profileRead:async ()=>{
        const response = await axios.get('http://localhost:8080/api/v2/profile');
        set({profileData:response.data});
        return response.data;
    }

}));