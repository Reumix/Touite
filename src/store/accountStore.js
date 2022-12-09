import create from "zustand";

export const useAccountStore = create((set) => ({
    user: string,
    password: string,
    setUser: (inputUser, inputPassword) => set({user: inputUser, password: inputPassword}),
}))