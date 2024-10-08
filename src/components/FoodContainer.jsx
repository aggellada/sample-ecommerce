import { forwardRef, useRef } from "react";
import { data } from "../data/data";

import { motion, useInView } from "framer-motion";

const FoodContainer = forwardRef(function FoodContainer({ addToCart }, ref) {
  const foodContainerRef = useRef();

  const foodContainerIsInView = useInView(foodContainerRef, {
    once: true,
    margin: "-500px",
  });

  return (
    <div ref={foodContainerRef} className="food_container" id="menu">
      <div className="food_grid">
        {foodContainerIsInView && (
          <>
            {data.map((dataObj, i) => {
              return (
                <motion.div
                  className="data_div"
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 * i }}
                >
                  <img src={dataObj.image_url} className="data_image" />
                  <h1>{dataObj.title}</h1>
                  <p className="price">P{dataObj.price}</p>
                  <p>{dataObj.description}</p>
                  <button
                    className="add_to_cart"
                    onClick={() => addToCart(dataObj)}
                  >
                    Add To Cart
                  </button>
                </motion.div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
});

export default FoodContainer;
