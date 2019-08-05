import React  from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavigationBar";
import ProductList from "./components/ProductList";
import Cart from "./components/cart/"
import Details from "./components/Details"
import Default from "./components/Default"
import OrderDetails from './components/OrderDetails';
import FinalPage from "./components/FinalPage";

class App extends React.Component {
  render () {
    return (<React.Fragment>
      <NavigationBar></NavigationBar>
      <Switch>
       <Route path="/~eyureva/hertz-uts/order-details" component={OrderDetails}></Route>
       <Route path="/~eyureva/hertz-uts/final-page" component={FinalPage}></Route>
       <Route exact path="/~eyureva/hertz-uts/" component={ProductList}></Route>
       <Route path="/~eyureva/hertz-uts/details" component={Details}></Route>
       <Route path="/~eyureva/hertz-uts/cart" component={Cart}></Route>
       <Route component={Default}></Route>
      </Switch>
    </React.Fragment>);
  }
}

export default App;
