import {create} from "zustand";
import axios from "axios";

const userState = create((set)=>({
    profileData:{},
    userForm:{email:'', password:'', name:'', mobile:'', address:'', image:'', role:''},
    userFormOnChange:(name, value)=>{
        set((state)=>({
                userForm:{
                    ...state.userForm,
                    [name]:value
                }
            }))
    },
    userLogin: async (userData)=>{
        const response = await axios.post('/api/v2/user', userData);
        set({profileData:response.data, userForm:response.data})
        return response.data;
    },
    profileRead: async ()=>{
        set({profileData:{}, userForm:{email:'', password:'', name:'', mobile:'', address:''}})
        const response = await axios.get('/api/v2/user');
        set({profileData:response.data.data, userForm:response.data.data})
        return response.data;
    },
    profileUpdate: async (data)=>{
        const response = await axios.put('/api/v2/user', data);
        set({profileData:response.data.data, userForm:response.data.data})
        return response.data;
    },
    logout: async ()=>{
        const response = await axios.post('/api/v2/user/logout');
        set({profileData:{}, userForm:{email:'', password:'', name:'', mobile:'', address:''}})
        return response.data;
    },
    createUser: async (userData)=>{
        const response = await axios.post('/api/v2/user/create', userData);
        return response.data;
    },
    userList:[],
    getUserList: async ()=>{
        set({userList:[]});
        const response = await axios.get('/api/v2/user/user-list');
        set({userList:response.data.data})
        return response.data;
    }



}));

export default userState;
