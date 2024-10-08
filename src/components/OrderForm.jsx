import { forwardRef, useState } from "react";
import Input from "./UI/Input";
import Input2 from "./UI/Input2";

import { motion } from "framer-motion";

const OrderForm = forwardRef(function OrderForm(
  { submitForm, closeCheckoutModal },
  ref
) {
  return (
    <motion.dialog
      className="order_form_modal"
      onClose={closeCheckoutModal}
      ref={ref}
      initial={{ opacity: 0, y: "-100px" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={submitForm} className="order_form_container">
        <div className="fullname">
          <Input label="First Name" labelTwo="Last Name" />
        </div>
        <Input2 label="Street Address" />
        <div className="fullname">
          <Input label="Region" labelTwo="City" />
        </div>
        <Input2 label="Email" />
        <Input2 label="Name" />
        <Input2 label="Zip Code" />
        <div className="space"></div>
        <div className="order_form_submit">
          <button type="submit" className="submit_order_button">
            Submit
          </button>
        </div>
      </form>
    </motion.dialog>
  );
});

export default OrderForm;
