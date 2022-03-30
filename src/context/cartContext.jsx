import { createContext, useState, useEffect, useContext } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  return (
    <CartContext.Provider value={{ name: "Icaro Vieira" }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const data = useContext(CartContext);

  return data;
}
