import axios from "axios";
import { use } from "react";
import { create } from "zustand";

export const CustomerState = create((set) => ({
    customerForm: { name: '', email: '', mobile: '', address: '', status: 'active' },
    customerFormOnChange: (name, value) => {
        set((state) => ({
            customerForm: {
                ...state.customerForm,
                [name]: value
            }
        }))
    },
    customerList: [],
    createCustomer: async (customerData) => {
        const response = await axios.post('/api/v2/customer', customerData);
        set({customerList:response.data.data })
        return response.data;
    },
    getCustomerList: async () => {
        set({ customerList: [] });
        const response = await axios.get('/api/v2/customer');
        set({ customerList: response.data.data })
        return response.data;
    },




}));