import React from 'react';
import {Link} from "react-router-dom";

function CartTotals({value}) {
    const { cartTotal, clearCart, makeOrder } = value;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                            <h5>
                                <span className="text-title">
                                    Total:
                                </span>
                                <strong> $ { cartTotal } </strong>
                            </h5>
                            <Link to="/~eyureva/hertz-uts/">
                                <button className="btn btn-outline-danger text-uppercase mb-3 px-5"
                                    type="button"
                                    onClick={() => clearCart()}>
                                        clear cart
                                </button>
                            </Link>
                            <Link to="/~eyureva/hertz-uts/order-details">
                                <button className="btn btn-outline-success text-uppercase mb-3 px-5 ml-5"
                                        type="button"
                                        onClick={() => {return true;}}>
                                    order
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}

export default CartTotals;