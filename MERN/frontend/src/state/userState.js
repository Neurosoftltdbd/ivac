import {create} from "zustand";
import axios from "axios";

const userState = create((set)=>({
    userForm:{email:'', password:'', name:'', phone:'', address:''},
    userFormOnChange:(name, value)=>{
        set((state)=>({
                userForm:{
                    ...state.userForm,
                    [name]:value
                }
            }))
    },
    userLogin: async (userData)=>{
        const response = await axios.post('/api/v2/login', userData);
        set({profileData:response.data, userForm:response.data})
        return response.data;
    },
    profileData:{},
    profileRead: async ()=>{
        const response = await axios.get('/api/v2/profile');
        set({profileData:response.data.data, userForm:response.data.data})
        return response.data;
    },
    profileUpdate: async (data)=>{
        const response = await axios.put('/api/v2/profile', data);
        set({profileData:response.data.data, userForm:response.data.data})
        return response.data;
    }



}));

export default userState;
