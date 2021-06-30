import React, { Component } from 'react'
import { PayPalButton } from "react-paypal-button-v2";


export default class PayButton extends Component {
    
    render() {
      const total = this.props.total
        
    return (
        <PayPalButton
        amount={total}
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          
          alert("Transaction completed by " + details.payer.name.given_name);
          
        ;
        }}
        options={{
         clientId: process.env.REACT_APP_PAYP_ID
        }
        }
      />
    );
  }
}
