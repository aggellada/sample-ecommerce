import { forwardRef } from "react";

import { motion } from "framer-motion";

const CartModal = forwardRef(function CartModal(
  {
    closeCart,
    cart,
    addCartQuantity,
    subtractCartQuantity,
    deleteCartItem,
    proceedToCheckout,
  },
  ref
) {
  const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price * curr.quantity;
  }, 0);

  return (
    <motion.dialog
      ref={ref}
      className="cart_modal"
      onClose={closeCart}
      initial={{ opacity: 0, y: "-100px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="cart">
        <h1>Your Cart</h1>
        {cart.length > 0 ? (
          cart.map((cartItem, i) => {
            return (
              <div key={i} className="cart_item">
                <div className="cart_title">
                  <p>
                    {cartItem.title} - P{cartItem.price} x {cartItem.quantity} =
                    P{cartItem.price * cartItem.quantity}
                  </p>
                </div>
                <div className="cart_price">
                  <button onClick={() => subtractCartQuantity(cartItem)}>
                    -
                  </button>
                  <p>{cartItem.quantity}</p>
                  <button onClick={() => addCartQuantity(cartItem)}>+</button>
                  <button onClick={() => deleteCartItem(cartItem)}>
                    <img
                      className="trash_button"
                      src="https://cdn2.iconfinder.com/data/icons/squircle-ui/32/Trash-256.png"
                    />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>Shopping cart is empty...</p>
        )}
        <div className="cart_actions">
          {cart.length > 0 && <p>Total Price: P{totalPrice}</p>}
          <div className="cart_buttons">
            <button onClick={closeCart} className="close_cart_button">
              Close
            </button>
            {cart.length > 0 && (
              <button
                onClick={proceedToCheckout}
                className="proceed_cart_button"
              >
                Proceed to Checkout
              </button>
            )}
          </div>
        </div>
      </div>
    </motion.dialog>
  );
});

export default CartModal;
