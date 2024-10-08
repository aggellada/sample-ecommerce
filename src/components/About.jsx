import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const aboutRef = useRef();

  const aboutContainerIsInView = useInView(aboutRef, {
    once: true,
    margin: "-300px",
  });

  return (
    <div className="about" ref={aboutRef} id="about">
      {aboutContainerIsInView && (
        <div className="about_container">
          <div className="left_about">
            <h1>About</h1>
            <motion.div
              className="left_text"
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p>
                We bring the heart and soul of the Philippines to your plate.
                Our restaurant is rooted in tradition, celebrating the rich and
                diverse flavors of Filipino cuisine. Whether you’re a first-time
                visitor or a longtime fan of our vibrant dishes, we aim to
                deliver an authentic and unforgettable dining experience.
              </p>
            </motion.div>
            <motion.div
              className="left_text"
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <p>
                We specialize in classic Filipino dishes, prepared with fresh
                ingredients and a modern touch. Every dish is crafted to
                perfection, blending savory, sour, and sweet flavors that
                represent the diverse regions of the Philippines.
              </p>
            </motion.div>
            <motion.div
              className="left_text"
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p>
                Our team is passionate about Filipino cuisine, from our
                experienced chefs who carefully recreate beloved family recipes
                to our friendly staff who treat every guest like family. We take
                pride in delivering not only delicious food but also genuine
                Filipino hospitality, known as “Mabuhay”—a warm welcome and the
                spirit of community.
              </p>
            </motion.div>
          </div>
          <div className="right_about">
            <div className="right_first">
              <motion.img
                src="https://img.freepik.com/premium-photo/chef-cooking-restaurant-kitchen_25996-8009.jpg"
                alt=""
                className="about_img"
                initial={{ opacity: 0, y: "-100px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </div>
            <div className="right_second">
              <motion.img
                src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chef-cooking.jpg?quality=82&strip=all"
                alt=""
                className="about_img"
                initial={{ opacity: 0, y: "100px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </div>
            <div className="right_third">
              <motion.img
                src="https://static.cordonbleu.edu/Files/MediaFile/84567.jpg"
                alt=""
                className="about_img"
                initial={{ opacity: 0, y: "-100px" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
