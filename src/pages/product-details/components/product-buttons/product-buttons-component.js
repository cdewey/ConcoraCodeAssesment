import React from 'react';
import Card from '../../../../generic-components/card'
import Button from '../../../../generic-components/button'
import './product-buttons-component.css';
import { useHistory } from "react-router-dom"
import styled from 'styled-components'
import config from 'react-global-configuration';
const axios = require('axios').default;

function ProductButtonsComponent(props) {

    const history = useHistory();

    const SiteConfiguredButton = styled(Button)`
        background-color: ${config.get('siteConfig').buttonColor};
    `;
    
    function deleteProduct(id){
        

        console.log("CLICKED")
        axios.delete('http://localhost:8080/product/'+id)
        .then((result) => {
            console.log(result);
            alert("Product Deleted")
            history.push("/products");
        })
        .catch((error) => {
            // handle error
            console.log(error);
            alert("FAILED to delete product")
        })
    }

    return (
        <Card>
            <SiteConfiguredButton className="top-button" onClick={() => history.push("/add_product")}>Add Product</SiteConfiguredButton>
            <SiteConfiguredButton onClick={() => deleteProduct(props.id)}>Delete Product</SiteConfiguredButton>
        </Card>
    );

  }

  export default ProductButtonsComponent