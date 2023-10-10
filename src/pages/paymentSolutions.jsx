import React from 'react';
import './paymentSolutions.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; import {
    faMagnifyingGlassLocation,
    faCar,
    faHouseLaptop
} from "@fortawesome/free-solid-svg-icons";

const paymentSolutions = () => {
    return (
        <div className='paymentPage_div'>
            <div className='howToBook'>
                <h1>How to book & pay for parking off-site</h1>
                <div className='howToBook_containers'>
                    <div className='cards_div'>
                        <FontAwesomeIcon icon={faMagnifyingGlassLocation} className='awesome_icons' />
                        <h1>Search & Locate</h1>
                        <p className='paragraphs_text'>Locate parking options for your destination efortlessly
                            using the <span className='boldApp'>YourParkingSpace</span> app or website. Conveniently compare nearby
                            parking spaces based on their pricing and proximity.
                        </p>
                    </div>
                    <div className='cards_div'>
                        <FontAwesomeIcon icon={faCar} className='awesome_icons' />
                        <h1>Book & Pay</h1>
                        <p className='paragraphs_text'>
                            Simply follow the provided instructions on <span className='boldApp'>YourParkingSpace </span>
                            and make your payment. Once completed, the parking space is reserved for the duration
                            of your booking.
                        </p>
                    </div>
                    <div className='cards_div'>
                        <FontAwesomeIcon icon={faHouseLaptop} className='awesome_icons' />
                        <h1>Park & Relax</h1>
                        <p className='paragraphs_text'>
                            Use <span className='boldApp' >YourParkingSpace</span> app to extend your parking time
                            in case your plans runs longer than expected. Say goodbay to
                            rushing back to the parking meter
                        </p>
                    </div>
                </div>
                <div className='mobileApps'>
                    <div className='twoPhones'>
                        <img src="/images/phones.jpg" alt="phones" />
                    </div>
                    <div className='downloadApps'>
                        <h3>Pay by mobile parking payments <br />with YourParkingSpace.</h3>
                        <p>
                            Information on how to use the app to pay by mobile
                            can be found on <span className='boldApp'>YourParkingSpace</span> website
                        </p>
                        <div className='twoApps'>
                            <img src="/images/appStore.png" alt="App Store" />
                            <img src="/images/googleStore.png" alt="Google Store" />
                        </div>
                    </div>
                    <div className='second_div'>
                        <div className='contactless'>
                            <h1>Payment by <span className='boldApp'>YourParkingSpace</span> ultra-slim
                                intelligent payment kiosk
                            </h1>
                            <p>
                                A guide on how to use the kiosk are available to <span className='boldApp'>YourParkingSpace</span> website.
                                Multiple payment types accepted at the kiosks.
                            </p>
                            <div className='four_images'>
                                <img src="/images/contactless1.png" alt="" />
                                <img src="/images/contactless2.png" alt="" />
                                <img src="/images/contactless3.png" alt="" />
                                <img src="/images/contactless4.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='twoPhones'><img src="/images/device.png" alt="" /></div>
                </div>
            </div>
        </div>
    )
}
export default paymentSolutions;
