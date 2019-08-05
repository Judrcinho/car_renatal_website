import React, {Component} from 'react';
import {Link} from "react-router-dom";

class OrderDetails extends Component {
    render() {
        return (
            <form className="flex-fill">
            <h3 className="m-auto justify-content-center d-flex">Your details:</h3>
                <table width="400px" className="justify-content-center m-auto pt-3">
                    <tr>
                        <td>
                            <label for="name" className="mt-1 required">First Name:</label>
                        </td>
                        <td><input type="text" className="form-control" id="name"/></td>
                    </tr>
                    <tr>
                        <td><label for="surname" className="mt-1 required">Surname:</label></td>
                        <td><input type="text" className="form-control" id="surname"/></td>
                    </tr>
                    <tr>
                        <td><label for="email" className="mt-1 required">Email adress:</label></td>
                        <td><input type="text" className="form-control" id="email"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="adress_line_1" className="mt-1 required">Adress line 1:</label></td>
                        <td><input type="text" className="form-control" id="adress_line_1"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="adress_line_2" className="mt-1">Adress line 2:</label></td>
                        <td><input type="text" className="form-control" id="adress_line_2"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="city" className="mt-1 required">City</label></td>
                        <td><input type="text" className="form-control" id="city"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="state" className="mt-1 required">State</label></td>
                        <td><input type="text" className="form-control" id="state"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="post_code" className="mt-1 required">Post code:</label></td>
                        <td><input type="text" className="form-control" id="post_code"/></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="payment_type" className="mt-1">Payment type:</label></td>
                        <td>
                            <label className="radio-inline"><input type="radio" name="payment_method" checked/> Visa</label>
                            <label className="radio-inline ml-3"><input type="radio" name="payment_method"/> Master Card</label>
                            <label className="radio-inline ml-3"><input type="radio" name="payment_method"/> PayPal</label>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <Link to="/~eyureva/hertz-uts/final-page" onClick={(e) => {
                                var name = document.getElementById('name').value;
                                var surname = document.getElementById('surname').value;
                                var email = document.getElementById('email').value;
                                var adress_line_1 = document.getElementById('adress_line_1').value;
                                var city = document.getElementById('city').value;
                                var state = document.getElementById('state').value;
                                var post_code = document.getElementById('post_code').value;
                                var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


                                if (name === "" || surname == "" || email == "" || adress_line_1 == "" || city == "" || post_code == "" || state == "")
                                {
                                    alert("All mandatory fields needs to be filled!");
                                    e.preventDefault()
                                    e.target.reset()
                                }

                                if (!email.match(mail_format))
                                {
                                    alert("Email is not correct! Input correct one");
                                    e.preventDefault()
                                    e.target.reset()
                                }
                            }}>
                            <button type="button" className="btn btn-outline-primary btn-block" id="submit">Submit</button>
                            </Link>
                        </td>
                    </tr>
                </table>
            </form>
        );
    }
}

export default OrderDetails;