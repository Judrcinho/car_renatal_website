import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class FinalPage extends Component {
    render() {
        return (
            <div className="ml-3 mt-3">
                <h2>Congratulations! Your order was successfully sent.</h2>
                <h2>You will receive an e-mail confirmation</h2>
            </div>

        )
    }
}

export default FinalPage;