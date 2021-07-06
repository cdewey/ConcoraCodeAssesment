import React from 'react';
import Page from '../../generic-components/page'
import { Grid }  from '@material-ui/core'
import ProductDisplayComponent from './components/product-dispaly/product-display-component'
import ProductButtonsComponent from './components/product-buttons/product-buttons-component';
import ProductInformationComponent from './components/product-information/product-information-component'
import './product-details-page.css';
const axios = require('axios').default;

class ProductDetailsPage extends React.Component {
    constructor(props){
        console.log("MY PROPS", props)
        super(props);
        this.state = {
            id: this.props.match.params.id,
            error: null,
            isLoaded: props.product ? true : false,
            product : props.product ? props.product : null
        }

    }

    componentDidMount() {

        if(this.state.isLoaded){
            return;
        }

        axios.get('http://localhost:8080/product/'+this.state.id)
        .then((result) => {
            console.log(result);
            this.setState({
                isLoaded: true,
                product: result.data.product
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
        const product = this.state.product;
        if (this.state.error) {
            return <div>Error: {this.state.error.message}</div>;
        } 
        else if (!this.state.isLoaded) {
            return <div>Loading...</div>;
        }
        else {
            return (
                <Page>
                    <p>{product.id}</p>
                    <Grid container direction="row" spacing={2}>
                        <Grid item xs={12} sm={10} className="">
                            <ProductDisplayComponent product={product}></ProductDisplayComponent>
                        </Grid>
                        <Grid item xs={12} sm={2}>
                            <ProductButtonsComponent id={product.id}></ProductButtonsComponent>
                        </Grid>
                        <Grid item xs={12}>
                            <ProductInformationComponent product={product}></ProductInformationComponent>
                        </Grid>
                    </Grid>
                </Page>
            );
        }
    }
  }

  export default ProductDetailsPage
