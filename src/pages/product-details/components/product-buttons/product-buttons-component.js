import React from 'react';
import Card from '../../../../generic-components/card'
import Button from '../../../../generic-components/button'
import './product-buttons-component.css';
import { useHistory } from "react-router-dom"
const axios = require('axios').default;

function ProductButtonsComponent(props) {

    const history = useHistory();
    
    function deleteProduct(id){
        

        console.log("CLICKED")
        axios.delete('http://localhost:3001/product/'+id)
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
            <Button className="top-button">Add Product</Button>
            <Button onClick={() => deleteProduct(props.id)}>Delete Product</Button>
        </Card>
    );

  }

  export default ProductButtonsComponent