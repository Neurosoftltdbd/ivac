import axios from "axios";
import { create } from "zustand";

export const ivacState = create((set) => ({
    ivacCode: '',
    ivacCodeOnChange: (newCode) => set({ ivacCode: newCode }),
    getIvacCode: async () => {
        try {
            const response = await axios.get('/api/v2/ivac');
            const data = response.data.data;
            set({ ivacCode: data[0].code });
            return data;
        } catch (error) {
            console.error("Failed to fetch IVAC code:", error);
        }
    },
    saveIvacCode: async (code) => {
        try {
            const response = await axios.post('/api/v2/ivac', { code });
            return response.data;
        } catch (error) {
            console.error("Failed to save IVAC code:", error);
        }
    },




}));