import { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Men from "./components/Men";
import About from "./components/About";
import Contact from "./components/Contact";
import Women from "./components/Women";
import Error from "./components/Error";
import React from "react";

const initialItems = [
  {
    id: 1,
    name: "MenSneakers",
    title: "Fall Limited Edition Sneakers",
    brand: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer",
    image1: "../images/image-product-1.jpg",
    image1Thumbnail: "../images/image-product-1-thumbnail.jpg",
    image2: "../images/image-product-2.jpg",
    image2Thumbnail: "../images/image-product-2-thumbnail.jpg",
    image3: "../images/image-product-3.jpg",
    image3Thumbnail: "../images/image-product-3-thumbnail.jpg",
    image4: "../images/image-product-4.jpg",
    image4Thumbnail: "../images/image-product-4-thumbnail.jpg",
    price: 125.0,
    quantity: 0,
    totalPrice: 0,
  },
  {
    id: 2,
    name: "womenSneakers",
    title: "Fall Limited Edition Sneakers",
    brand: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer. Comfortable and stylish, these sneakers are a must-have for any wardrobe.",
    image1: "../images/image-product-1.jpg",
    image1Thumbnail: "../images/image-product-1-thumbnail.jpg",
    image2: "../images/image-product-2.jpg",
    image2Thumbnail: "../images/image-product-2-thumbnail.jpg",
    image3: "../images/image-product-3.jpg",
    image3Thumbnail: "../images/image-product-3-thumbnail.jpg",
    image4: "../images/image-product-4.jpg",
    image4Thumbnail: "../images/image-product-4-thumbnail.jpg",
    price: 125.0,
    quantity: 0,
    totalPrice: 0,
  },
];

export const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [items, setItems] = useState(initialItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const manipulatingQuantity = (id, action) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + (action === "increase" ? 1 : -1),
            }
          : item
      )
    );
  };

  const increaseQuantity = (id) => {
    manipulatingQuantity(id, "increase");
  };

  const decreaseQuantity = (id) => {
    manipulatingQuantity(id, "decrease");
  };

  const cartItems = items.filter((item) => item.quantity > 0);

  const resetItem = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: 0,
            }
          : item
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        increaseQuantity,
        decreaseQuantity,
        cartItems,
        resetItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Men />} />
      <Route path="men" element={<Men />} />
      <Route path="women" element={<Women />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
};

export default App;
