import React from 'react';
import "../styles/Stripe.css"
import Stripecard from './Stripecard';
import { FiRotateCw  } from "react-icons/fi";
import { GoGear } from "react-icons/go";
import { SlPaperPlane } from "react-icons/sl";

const Stripe = () => {
  return (
    <>
      
      <div className="main">
      <div className="logo1"> 

      <FiRotateCw/>
      </div>
      <Stripecard  above="Hassel Free Replacement" below="10-day easy replacement policy on mi.com"/>
      <div className="logo1"> 
      <GoGear/>
      </div>
      <Stripecard  above="100% Secure Payments" below="We Support Cards, Wallets, EMI, and COD"/>
      <div className="logo1"> 
      <SlPaperPlane/>
      </div>
      <Stripecard  above="Vast Service Network" below="1000 Mi service-center across 600 Cities"/>


      </div>



    </>
  )
}

export default Stripe
