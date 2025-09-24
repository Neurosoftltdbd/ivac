import {create} from "zustand";
import axios from "axios";

const userState = create((set)=>({
    userForm:{email:'', password:''},
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
        set({profileData:response.data})
        return response.data;
    },
    profileData:{},
    profileRead: async ()=>{
        const response = await axios.get('/api/v2/profile');
        set({profileData:response.data})
        return response.data;
    },



}));

export default userState;
