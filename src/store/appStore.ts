import { create } from "zustand"

export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

export interface AppStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
  getCart: () => CartItem[];
  getCartTotal: () => number;
  getCartQuantity: () => number;
}

export const useAppStore = create<AppStore>((set, get) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        return {
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          ),
        };
      } else {
        return { cart: [...state.cart, item] };
      }
    }),

  clearCart: () => set({ cart: [] }),

  getCart: () => get().cart,

  getCartTotal: () =>
    get().cart.reduce((acc, item) => acc + item.price * item.quantity, 0),

  getCartQuantity: () =>
    get().cart.reduce((acc, item) => acc + item.quantity, 0),
}));
