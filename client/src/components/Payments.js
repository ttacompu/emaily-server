import React, { Component } from "react";
import StripeCheckOut from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions'


class Payments extends Component{
    render(){
        debugger;
        return (
            <StripeCheckOut amount={500} token={ token => this.props.handleToken(token)} 
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
            name="Emaily"
            description="$5 for 5"
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckOut>
        );
    }
}

export default connect(null, actions)(Payments);