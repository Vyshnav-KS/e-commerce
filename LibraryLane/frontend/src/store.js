import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBookstore = create(
  persist(
    (set) => ({
      user: {},
      setUser: (userDetails) => set({ user: userDetails }),

      book: {},
      setBook: (book) => set({ book: book }),

      cart: [],
      addToCart: (book) =>
        set((state) => ({
          cart: addBookToCart(state.cart, book),
        })),

      removeFromCart: (book) =>
        set((state) => ({
          cart: removeFromCart(state.cart, book),
        })),
    }),

    {
      name: "book-storage", // unique name
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

const addBookToCart = (books, newBook) => {
  const hasBook = books.some((book) => book.id === newBook.id);
  !hasBook && books.push(newBook);
  return [...books];
};

const removeFromCart = (books, bookToRemove) => {
  return books.filter((book) => book.id !== bookToRemove.id);
};
