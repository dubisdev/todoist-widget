import { create } from "zustand";

interface SelectedDayStore {
    day: Date;
    setDay: (day: Date) => void;
}

export const useSelectedDayStore = create<SelectedDayStore>()((set) => ({
    day: new Date(),
    setDay: (day) => set({ day }),
}))
