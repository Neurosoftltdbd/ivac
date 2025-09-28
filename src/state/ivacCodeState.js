import axios from "axios";
import { create } from "zustand";

export const ivacCodeState = create((set) => ({
    ivacCode: '',
    ivacCodeResponse:{},
    ivacCodeOnChange: (newCode) => set({ ivacCode: newCode }),
    getIvacCode: async () => {
        try {
            const response = await axios.get('/api/v2/code');
            const data = response.data.data;
            set({ ivacCode: data.code , ivacCodeResponse: response.data });
            return data;
        } catch (error) {
            console.error("Failed to fetch IVAC code:", error);
        }
    },
    saveIvacCode: async (code) => {
        try {
            const response = await axios.put('/api/v2/code', { code });
            return response.data;
        } catch (error) {
            console.error("Failed to save IVAC code:", error);
        }
    },



}));