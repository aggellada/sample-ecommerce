import "./App.css";
import Navigation from "./components/Navigation";
import FoodContainer from "./components/FoodContainer";
import { useEffect, useRef, useState } from "react";
import CartModal from "./components/CartModal";
import Welcome from "./components/Welcome";
import OrderForm from "./components/OrderForm";
import { useInView } from "framer-motion";
import NavigationFixed from "./components/NavigationFixed";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  // States
  const [cart, setCart] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [customerData, setCustomerData] = useState([]);
  const [contactData, setContactData] = useState([]);

  // Modals
  const cartModal = useRef();
  const formModal = useRef();

  // useInView
  const welcomeRef = useRef();
  const welcomeIsInView = useInView(welcomeRef, { margin: "-175px" });

  // MODALS NAVIGATION

  useEffect(() => {
    if (showCartModal) {
      cartModal.current.showModal();
    } else if (showOrderModal) {
      formModal.current.showModal();
    }
  }, [showCartModal, showOrderModal]);

  const showCart = () => {
    setShowCartModal(true);
  };

  const closeCart = () => {
    cartModal.current.close();
    setShowCartModal(false);
  };

  const proceedToCheckout = () => {
    cartModal.current.close();
    // formModal.current.showModal();
    setShowOrderModal(true);
  };

  const closeCheckoutModal = () => {
    setShowOrderModal(false);
  };

  // CART FUNCTIONALITIES

  const addToCart = (data) => {
    const newDataObj = { ...data, quantity: 1 };
    setCart((prev) => {
      const existingData = prev.find((curr) => curr.id === newDataObj.id);
      if (existingData) {
        return prev.map((prevItem) => {
          if (prevItem.id !== existingData.id) return prevItem;
          return { ...prevItem, quantity: prevItem.quantity + 1 };
        });
      } else {
        return [...prev, newDataObj];
      }
    });
    alert("An item has been added to your cart!");
  };

  const addCartQuantity = (cartItem) => {
    setCart((prev) => {
      return prev.map((item) => {
        if (item.id !== cartItem.id) return item;
        return { ...item, quantity: item.quantity + 1 };
      });
    });
  };

  const subtractCartQuantity = (cartItem) => {
    setCart((prev) => {
      return prev.map((curr) => {
        if (curr.id !== cartItem.id) return curr;
        return {
          ...curr,
          quantity: curr.quantity <= 1 ? 1 : curr.quantity - 1,
        };
      });
    });
  };

  const deleteCartItem = (cartItem) => {
    setCart((prev) => {
      return prev.filter((item) => item.id !== cartItem.id);
    });
  };

  // SUBMIT CUSTOMER FORM

  const submitForm = (event) => {
    event.preventDefault();

    const form = event.target;
    const fd = new FormData(form);
    const formObject = Object.fromEntries(fd.entries());
    const overallCustomer = { ...formObject, orders: cart };

    setCustomerData((prev) => {
      return [...prev, overallCustomer];
    });
    setCart([]);
    alert("Order has been placed!");

    formModal.current.close();
  };

  // SUBMIT CUSTOMER MESSAGE

  const submitMessage = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    setContactData((prev) => {
      return [...prev, data];
    });
  };

  return (
    <>
      {showCartModal && (
        <CartModal
          ref={cartModal}
          cart={cart}
          closeCart={closeCart}
          addCartQuantity={addCartQuantity}
          subtractCartQuantity={subtractCartQuantity}
          deleteCartItem={deleteCartItem}
          proceedToCheckout={proceedToCheckout}
        />
      )}
      {showOrderModal && (
        <OrderForm
          ref={formModal}
          submitForm={submitForm}
          closeCheckoutModal={closeCheckoutModal}
        />
      )}
      {welcomeIsInView ? (
        <Navigation cart={cart} showCart={showCart} />
      ) : (
        <NavigationFixed showCart={showCart} cart={cart} />
      )}
      <Welcome ref={welcomeRef} />
      <FoodContainer addToCart={addToCart} />
      <About />
      <Contact submitMessage={submitMessage} />
    </>
  );
}

export default App;
