import {create} from "zustand";

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
        const response = await fetch('/api/v2/user', {method: 'POST', body: JSON.stringify(userData)});
        const data = await response.json();
        set({profileData: data.data, userForm: data.data});
        return data;
    },
    profileRead: async ()=>{
        set({profileData:{}, userForm:{email:'', password:'', name:'', mobile:'', address:''}})
        const response = await fetch('/api/v2/user', {method: 'GET'});
        const data = await response.json();
        set({profileData: data.data, userForm: data.data})
        return data;
    },
    profileUpdate: async (data)=>{
        const response = await fetch('/api/v2/user', {method: 'PUT', body: JSON.stringify(data)});
        const res = await response.json();
        set({profileData: res.data, userForm: res.data});
        return res;
    },
    logout: async ()=>{
        const response = await fetch('/api/v2/user/logout', {method: 'POST'});
        const data = await response.json();
        set({profileData:{}, userForm:{email:'', password:'', name:'', mobile:'', address:''}})
        return data;
    },
    createUser: async (userData)=>{
        const response = await fetch('/api/v2/user/create', {method: 'POST', body: JSON.stringify(userData)});
        const data = await response.json();
        return data;
    },
    userList:[],
    getUserList: async ()=>{
        set({userList:[]});
        const response = await fetch('/api/v2/user/user-list', {method: 'GET'});
        const data = await response.json();
        set({userList: data.data});
        return data;
    }



}));

export default userState;
