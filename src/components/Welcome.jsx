import { forwardRef } from "react";

const Welcome = forwardRef(function Welcome({}, ref) {
  return (
    <div ref={ref} className="welcome_div" id="welcome">
      <div className="test_grid">
        <div className="top_grid">
          <div className="left_grid">
            <h1>Salvatorre El Briega</h1>
            <div>
              <h1>Savor the Soul</h1>
              <h1>of the Philippines</h1>
              <h1>One Bite at a Time.</h1>
            </div>
            <div style={{ width: "80%" }}>
              <p>
                At RESTAURANT NAME, we invite you to savor the vibrant and
                diverse flavors of Filipino cuisine. Each bite takes you on a
                culinary journey to the heart of the Philippines. Whether you're
                dining with us or ordering from our delivery service, expect
                authentic flavors, fresh ingredients, and warm Filipino
                hospitality in every meal.
              </p>
            </div>
            <div className="actions_left_grid">
              <a href="#menu">Order now</a>
            </div>
          </div>
          <div className="right_grid">
            <div className="left_half">
              <div className="fast_delivery">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/delivery-service-flat/64/delivery_order_service_motor_courier-256.png"
                  alt="Delivery icon"
                  className="landing_icons"
                />
                <div className="left_half_text">
                  <h1>Fast Delivery</h1>
                  <p>Promise to deliver within 30 minutes</p>
                </div>
              </div>
              <div className="pick_up">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/twitter-29/512/157_Twitter_Location_Map-256.png"
                  alt="Location Icon"
                  className="landing_icons"
                />
                <div className="left_half_text">
                  <h1>Pick-up</h1>
                  <p>Pick-up delivery at your doorstep</p>
                </div>
              </div>
              <div className="dine_in">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/food-and-drinks-67/100/Dine_In-256.png"
                  alt="Dine in icon"
                  className="landing_icons"
                />
                <div className="left_half_text">
                  <h1>Dine-in</h1>
                  <p>Enjoy your food crispy and hot</p>
                </div>
              </div>
            </div>
            <div className="right_half">
              <div className="outer_circle"></div>
            </div>
          </div>
        </div>
        <div className="bottom_grid">
          <p>Visit us on our socials and stay connected!</p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-256.png"
            className="bottom_grid_icons"
          />
          <img
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-256.png"
            className="bottom_grid_icons"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-256.png"
            className="bottom_grid_icons"
          />
        </div>
      </div>
    </div>
  );
});

export default Welcome;
