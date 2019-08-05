import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from "react-router-dom";
import {ButtonContainer} from "./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, company, title, price, category, inCart, img, fuel_type, mileage, model_year, seats, availability } = value.detailProduct;
                    return (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className="row">
                            <img className="img-na" src="img/not_available.png" height="80px" width="160px" hidden={availability ? true : false} />
                            <div className="col-10  mx-auto col-md-6 my-3">
                                <img src={img} className="img-fluid" alt="product"/>
                            </div>
                            <div className="col-10  mx-auto col-md-6 my-3 text-capitalize">
                                <h2>model: {title}</h2>
                                <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                    made by: <span className="text-uppercase">
                                    {company}
                                </span>
                                </h4>
                                <h4 className="text-blue">
                                    <strong>
                                        price: <span>$</span> {price}
                                    </strong>
                                </h4>
                                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                    product info:
                                </p>
                                <p className="text-muted lead ">
                                    {"Category: " + category} <br/>
                                    {"Fuel type: " + fuel_type} <br/>
                                    {"Mileage: " + mileage} <br/>
                                    {"Year: " + model_year} <br/>
                                    {"Number of seats: " + seats} <br/>
                                </p>
                                <div>
                                    <Link to='/~eyureva/hertz-uts/'>
                                        <ButtonContainer>
                                            back to products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                    cart
                                    disabled={inCart ? true : false}
                                    onClick={() => {
                                        if (availability === false)
                                        {
                                            alert("Sorry, this car is not available!");
                                            return;
                                        }
                                        value.addToCart(id);
                                    }}>
                                        {inCart ? "in cart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;