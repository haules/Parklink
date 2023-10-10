import React from "react";
import "./howItWorks.css";
import Date_Picker from "../components/datePicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faClockRotateLeft,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";
import Collapsible from "react-collapsible";
import Email from "../components/email";

function HowItWorks() {
  return (
    <div>
      <div className="div_background_image">
        {/* div_heading beginns */}
        <div className="div_heading">
          <h1>Looking for a spot?</h1>
          <h2>Find and book parking in seconds</h2>
          {/* {Date_Picker} */}
{/* <Date_Picker/> */}
        </div>
        {/* div_heading ends */}

      </div>
      {/* div_background_image ends */}

      {/* ------------------howItWorkdiv beginns */}
      <div className="howItWorks_mainDiv">
        <div className="hit_section">
          <h2 className="hit_title">How Does It Work?</h2>

          <div className="hit_content">
            <div className="div_one">
              <h1 className="one">1</h1>
              <div className="div_one_titles">
                <i>
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="dot_icon_one"
                  />
                </i>
                <h4>Find the best parking</h4>
                <p>On-site or near your destination</p>
              </div>
            </div>

            <div className="div_two">
              <h1 className="two">2</h1>
              <div className="div_two_titles">
                <i>
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    className="dot_icon_two"
                  />
                </i>
                <h4>Pre book your spot</h4>
                <p>Book in advance or book it on arrival</p>
              </div>
            </div>

            <div className="div_three">
              <h1 className="three">3</h1>
              <div className="div_three_titles">
                <i>
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="dot_icon_two"
                  />
                </i>
                <h4>Park with confidence</h4>
                <p>Show your reservation when you arriva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* howItWorks ends */}
      {/* hit_whyBook section beginns here */}
      <div className="hit_whyBook">
        <div className="image_div">
          <img src="images/ibm1.jpg" alt="myimg" />
        </div>
        <div className="info_div">
          <div className="containre">
            <h1>Why Book Parking?</h1>
            <hr />
            <h3>Save Time & Money</h3>
            <p>Pre book to same time, money and hassle on space.</p>
            <hr />
            <h3>Park Closer</h3>
            <p>Find and book closer spots if on-site parking is unavailable</p>
            <hr />
            <h3>Peace of Mind</h3>
            <p>Find the best spots and extend your stay on the website</p>
          </div>
        </div>
      </div>
      {/* hit_whyBook section ends here */}

      {/* Collapsible section beginns here */}
      <div className="questions_container">
        <div className="mid_container">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="questions">
          <Collapsible trigger="What is ParkLink?">
            <p>add text</p>
          </Collapsible>

          <Collapsible trigger="How do I book a parking space?">
            <p>add text</p>
          </Collapsible>

          <Collapsible trigger="What happens after I book a space?">
            <p>add text</p>
          </Collapsible>

          <Collapsible trigger="How do I cancel a booking?">
            <p>add text</p>
          </Collapsible>

          <Collapsible trigger="Can I extend my session if I need more time?">
            <p>add text</p>
          </Collapsible>

          <Collapsible trigger="Can I make long-term booking?">
            <p>add text</p>
          </Collapsible>
        </div>
      </div>

      {/* Collapsible section ends here */}

      <div className="newsletter_container">
        <div className="newsletter_heading">
          <h1>Subscribe to our Newsletter</h1>
        </div>
        <div>
          <Email />
        </div>
        <p>*You will receive news, promotions and discounts, no spam!</p>
        <p>
          By subscribing you accept our Privacy and Policy to receive commercial
          communications from ParkLink.
          <br />
          Without any obligation, you can unsubscribe whenever you want in the
          same newsletter
        </p>
      </div>
    </div>
  );
}
export default HowItWorks;
