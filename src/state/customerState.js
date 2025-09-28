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
        const response = await fetch('/api/v2/customer', {method: 'POST', body: JSON.stringify(customerData)});
        const data = await response.json();
        set({customerList: data.data });
        return data;
    },
    getCustomerList: async () => {
        set({ customerList: [] });
        //const response = await axios.get('/api/v2/customer');
        const response = await fetch('/api/v2/customer', {method: 'GET'});
        const data = await response.json();
        set({ customerList: data.data });
        return data;
    },
    customerData: {},
    getCustomerById: async (id) => {
        const response = await fetch(`/api/v2/customer/${id}`, {method: 'GET'});
        const data = await response.json();
        set({ customerData: data.data });
        return data;
    }




}));