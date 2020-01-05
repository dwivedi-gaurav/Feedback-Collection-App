import React from 'react';
import {connect} from 'react-redux';
import StripeCheckput from 'react-stripe-checkout';
import {handleStripeToken} from '../actions';

class Payment extends React.Component{
    render(){
        return(
            <StripeCheckput 
                name="EmailY"
                description="Pay $5 for 5 survey credits"
                amount={500}
                token={token=>this.props.handleStripeToken(token)}  //Callback function called when our client gets back token from Stripe
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">Add Credits</button>
            </StripeCheckput>
        )
    }
}

export default connect(null,{handleStripeToken})(Payment);