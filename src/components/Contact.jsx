import ContactInfo from "./UI/ContactInfo";
import ContactInput from "./UI/ContactInput";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Contact({ submitMessage }) {
  const contactRef = useRef();
  const contactIsInView = useInView(contactRef, { once: true });

  return (
    <>
      <div className="contact_page" id="contact" ref={contactRef}>
        <div className="contact_container">
          <div className="contact_left">
            {contactIsInView && (
              <motion.div
                className="contact_left_info"
                initial={{ opacity: 0, x: "-50px" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <ContactInfo
                  header="Contact us"
                  description="Need to get in touch with us?"
                />
                <ContactInfo
                  header="Email"
                  description="yourname@example.com"
                />
                <ContactInfo
                  header="Location"
                  description="San Francisco, CA, USA@example.com"
                />
                <ContactInfo
                  header="Office"
                  description="23 Market Street, Suite 456, San Francisco, CA 94105, USA"
                />
              </motion.div>
            )}
          </div>
          <div className="contact_right">
            <h1>Online Inquiry</h1>
            {contactIsInView && (
              <motion.form
                className="contact_form"
                onSubmit={submitMessage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <ContactInput placeholder="Name" type="text" name="Name" />
                <ContactInput placeholder="Email" type="text" name="Email" />
                <ContactInput placeholder="Phone" type="text" name="Phone" />

                <div>
                  <textarea
                    className="contact_input"
                    placeholder="Message"
                    type="text"
                    rows="6"
                    name="Message"
                  />
                </div>
                <button className="contact_button">SEND MESSAGE</button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
