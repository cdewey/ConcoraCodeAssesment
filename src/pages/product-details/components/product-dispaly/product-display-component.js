import React from 'react';
import Card from '../../../../generic-components/card'
import { Grid }  from '@material-ui/core';
import './product-display-component.css';

class ProductDisplayComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product : props.product
        }
    }

    render() {
        const product = this.state.product;
        const features = product.features.map((feature) =>
            <li>{feature}</li>
        );
        return (
        <Card>
            <div className="container">
                <img src={product.imageURL} alt="Product" className="product-image"/>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} sm={6}>
                        <div className="container-col">
                            <div className="headerText">BRAND</div>
                            <p>{product.brand}</p>
                        </div>  
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="container-col">
                            <div className="headerText">CATEGORY</div>
                            <p>{product.category}</p>
                        </div>  
                    </Grid>
                    <Grid item xs={12}>
                        <div className="container-col">
                            <div className="subheaderText">DESCRIPTION</div>
                            <p>{product.description}</p>
                        </div>  
                    </Grid>
                    <Grid item xs={12}>
                        <div className="container-col">
                            <div className="subsubheaderText">Features</div>
                            <ul>{features}</ul>
                        </div>  
                    </Grid>
                </Grid>
            </div>
        </Card>
        );
    }
  }

  export default ProductDisplayComponent