import create from "zustand";

export const useCategorieStore = create((set) => ({
    categorie: [],
    setCategorie: (categorie) => set((state) => ({categorie: categorie})),
}))