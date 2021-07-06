import React from 'react';
import Page from '../../generic-components/page'
import { Link } from "react-router-dom";
import './product-list-page.css';
const axios = require('axios').default;

class ProductListPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            product : {}
        }
    }

    componentDidMount() {

        axios.post('http://localhost:8080/products')
        .then((result) => {
            console.log(result);
            this.setState({
                isLoaded: true,
                products: result.data.products
            });
        })
        .catch((error) => {
            // handle error
            console.log(error);
            this.setState({
                isLoaded: true,
                error : error
            });
        })
    }
    

    render() {
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } 
        else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            const products = this.state.products.map((product) =>
                <li><Link to={ {pathname: "/products/"+product.id, state : { product : product}}}>{product.name} : {product.id}</Link></li>
            );
            return (
                <Page>
                    <h1>Check out our ridiculously cartoonish products</h1>
                    <ol>{products}</ol>
                </Page>
            );
        }
    }
  }

  export default ProductListPage
