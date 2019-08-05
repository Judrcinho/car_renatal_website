import React, {Component} from 'react';
var parseString = require('xml2js').parseString;

var xmlCars = [];


const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products:[],
        detailProduct: null,
        cart: [],
        cartTotal: 0
    };

    componentDidMount() {
        this.loadXml();
        console.log(this.state.products);
    };

    loadXml() {
        var xml = new XMLHttpRequest();
        xml.open('GET','cars.xml', true);
        xml.onload = request => {

            var xmlResponse = xml.responseXML;
            var stringResponce = (new XMLSerializer()).serializeToString(xmlResponse);

            parseString(stringResponce, {explicitRoot: false, explicitArray: false}, function (err, result) {
                xmlCars = result;
            });

            var updCars = xmlCars['car'];
            updCars.forEach(i => {
                i['price'] = parseInt(i['price_per_day']);
                i['company'] = i['brand'];
                i['title'] = i['model'];
                i['img'] = 'img/' + i['model'] + '.jpg';
                i['inCart'] = false;
                i['total'] = 0;
                i['count'] = 0;
                i['id'] = parseInt(i['id']);
                i['availability'] = i['availability'].toLowerCase() === 'true';
            });

            this.setState(() => {
                return {products: updCars, detailProduct: updCars[0]}
            })
        };

        xml.send();
    };

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);

        return product;
    };

    handleDetail = id  => {
        const product = this.getItem(id);
        this.setState( () => {
            return { detailProduct: product };
        });
    };

    addToCart = id => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        this.setState(
            () => {
                return {products: tempProducts, cart: [...this.state.cart, product]};
            },
                () => {
                this.addTotal();
                }
        );
    };

    incrementation = id => {
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        product.total = product.count * product.price;

        this.setState(() => { return {cart: [...tempCart]} },
            () => { this.addTotal(); })
    };

    decrementation = id => {
        let tempCart = [...this.state.cart];
        const selectProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        }
        else {
            product.total = product.count * product.price;

            this.setState(() => { return {cart: [...tempCart]} },
                () => { this.addTotal(); })
        }
    };

    removeItem = id => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter (item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 0;
        removedProduct.total = 0;

        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: [...tempProducts]
                };
            }, () => {
            this.addTotal();
        })
    };

    clearCart = () => {
        this.setState(() => {
            return { cart: []};
            }, () => {
            this.loadXml();
            this.addTotal();
        });
     };

    makeOrder = () => {

    };

    addTotal = () => {
        let total = 0;
        this.state.cart.map(item => (total += item.total));

        this.setState( () => {
            return { cartTotal: total };
        })

    };

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                increment: this.incrementation,
                decrement: this.decrementation,
                removeItem: this.removeItem,
                clearCart: this.clearCart}}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}

