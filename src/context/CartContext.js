// 'use client';

// import { createContext, useContext, useState, useEffect } from 'react';

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Load cart safely
//   useEffect(() => {
//     try {
//       const savedCart = localStorage.getItem('cart');
//       if (savedCart) {
//         setCartItems(JSON.parse(savedCart));
//       }
//     } catch (error) {
//       console.error("Invalid cart data. Clearing storage.");
//       localStorage.removeItem('cart');
//     }
//   }, []);

//   // ✅ Save only required fields (IMPORTANT FIX)
//   useEffect(() => {
//     try {
//       const minimalCart = cartItems.map(item => ({
//         id: item.id,
//         name: item.name,
//         price: item.price,
//         quantity: item.quantity
//       }));

//       localStorage.setItem('cart', JSON.stringify(minimalCart));
//     } catch (error) {
//       console.error("Storage quota exceeded. Clearing cart.");
//       localStorage.removeItem('cart');
//     }
//   }, [cartItems]);

//   const addToCart = (product) => {
//     setCartItems(prevItems => {
//       const existingItem = prevItems.find(item => item.id === product.id);

//       if (existingItem) {
//         return prevItems.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         // ✅ Only store required data
//         return [
//           ...prevItems,
//           {
//             id: product.id,
//             name: product.name,
//             price: product.price,
//             quantity: 1
//           }
//         ];
//       }
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems(prevItems =>
//       prevItems.filter(item => item.id !== id)
//     );
//   };

//   const updateQuantity = (id, newQuantity) => {
//     if (newQuantity < 1) {
//       removeFromCart(id);
//       return;
//     }

//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === id
//           ? { ...item, quantity: newQuantity }
//           : item
//       )
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//     localStorage.removeItem('cart');
//   };

//   const getTotalItems = () => {
//     return cartItems.reduce((total, item) => total + item.quantity, 0);
//   };

//   const getTotalPrice = () => {
//     return cartItems.reduce(
//       (total, item) =>
//         total + parseFloat(item.price.replace('$', '')) * item.quantity,
//       0
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         getTotalItems,
//         getTotalPrice
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCart must be used within a CartProvider');
//   }
//   return context;
// }

"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setCartItems(JSON.parse(saved));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // ADD TO CART
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // UPDATE QUANTITY
  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: qty } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // REMOVE ITEM
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // TOTAL PRICE
  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => {
  //     const price = parseFloat(item.price.replace("$", ""));
  //     return total + price * item.quantity;
  //   }, 0);
  // };
  const getTotalPrice = () => {
  return cartItems.reduce((total, item) => {
    const price =
      typeof item.price === "string"
        ? Number(item.price.replace("$", ""))
        : item.price;

    return total + price * item.quantity;
  }, 0);
};


  // TOTAL ITEMS COUNT
  const getTotalItems = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
