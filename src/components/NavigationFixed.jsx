import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function NavigationFixed({ showCart, cart }) {
  const [currentDate, setCurrentDate] = useState(null);
  const cartLength = cart.length;

  const getCurrentDateAndTime = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDate = date.toLocaleString("en-US", options);
    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    getCurrentDateAndTime();
    const interval = setInterval(() => {
      getCurrentDateAndTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        key="fixedNav"
        className="navigation_fixed"
        initial={{ opacity: 0, y: "-100px" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ y: "-100px" }}
      >
        <div className="logo_div">
          <div className="left_div">
            <a href="#welcome">
              <img
                src="https://cdn0.iconfinder.com/data/icons/lifestyle-entertainment-vol-2/512/restaurant_cafe_building_deli-256.png"
                alt="Web Logo"
                className="web_logo"
              />
              Shopify
            </a>
          </div>
        </div>
        <div className="navigation_middle">
          <div className="middle_div">
            <a href="#menu">Menu</a>
          </div>
          <div className="middle_div">
            <a href="#about">About</a>
          </div>
          <div className="middle_div">
            <a href="#contact">Contact Us</a>
          </div>
        </div>
        <p style={{ width: "11%" }}>{currentDate}</p>
        <div className="cart_div">
          <button onClick={showCart} className="shopping_cart_button">
            <img
              src="https://cdn1.iconfinder.com/data/icons/social-productivity-line-art-4/128/shopping-cart2-256.png"
              style={{ width: "25px" }}
            />
            ({cartLength})
          </button>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
