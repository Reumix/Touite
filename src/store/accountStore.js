import create from 'zustand';

export const useAccountStore = create((set) => ({
    account: [],
    setAccount: (account) => set((state) => ({account: account})),
}));