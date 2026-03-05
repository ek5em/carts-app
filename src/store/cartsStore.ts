import { create } from 'zustand';


const INITIAL_STATE = {
  page: 1,
  limit: 10,
  userIdFilter: '',
};

interface CartsStore {
  page: number;
  limit: number;
  userIdFilter: string;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  setUserIdFilter: (userId: string) => void;
}

export const useCartsStore = create<CartsStore>((set) => ({
  ...INITIAL_STATE,
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit, page: INITIAL_STATE.page }),
  setUserIdFilter: (userIdFilter) => set({ userIdFilter, page: INITIAL_STATE.page }),
}));
