import React from 'react';
import Card from '../../../../generic-components/card'
import { Tabs, Tab, makeStyles  }  from '@material-ui/core';
import './product-information-component.css';

function TabPanel(props) {
    const { children, value, index} = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}>
        {children}
      </div>
    );
  }

class ProductInformationComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product : props.product,
            tabValue : 0
        }
    }

    useStyles = makeStyles((theme) => ({
        root: {
          flexGrow: 1,
          backgroundColor: 'white',
        },
    }));

    handleChange = (event, newValue) => {
        this.setState({tabValue : newValue});
    };

    determineUnit(unit){
        if(unit === "I"){
            return (<span>in</span>);
        }
        else if(unit === "C"){
            return (<span>cm</span>);
        }
        else if(unit === "P"){
            return (<span>lbs</span>);
        }
        else if(unit === "K"){
            return (<span>kg</span>);
        }
        else{
            return (<span></span>);
        }
    }

    render() {
        const product = this.state.product;
        const resources = this.state.product.resources;
        const heightUnit = this.determineUnit(product.productInfo.height.unit);
        const widthUnit = this.determineUnit(product.productInfo.width.unit);
        const lengthUnit = this.determineUnit(product.productInfo.length.unit);
        const weightUnit = this.determineUnit(product.productInfo.weight.unit);

        return (
        <Card>
            <Tabs value={this.state.tabValue} onChange={this.handleChange} aria-label="Product information tabs" selectionFollowsFocus >
                <Tab label={<span>Product Information</span>} value={0}/>
                <Tab label={<span>Resources</span>} value={1}/>
                <Tab label={<span>Other</span>} value={2}/>
            </Tabs>
            <TabPanel value={this.state.tabValue} index={0}>
                <div className="container-col">
                    <div className="container">
                        <span><b>Height:</b></span>
                        <span>{product.productInfo.height.value} {heightUnit}</span>
                    </div>
                    <div className="container">
                        <span><b>Width:</b></span>
                        <span>{product.productInfo.width.value} {widthUnit}</span>
                    </div>
                    <div className="container">
                        <span><b>Length:</b></span>
                        <span>{product.productInfo.length.value} {lengthUnit}</span>
                    </div>
                    <div className="container">
                        <span><b>Weight:</b></span>
                        <span>{product.productInfo.weight.value} {weightUnit}</span>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={this.state.tabValue} index={1}>
                <ul>
                    <li><a href={resources.faq}>FAQ</a></li>
                    <li><a href={resources.userManual}>User Manual</a></li>
                    <li><a href={resources.troubleShooting}>Trouble Shooting</a></li>
                    <li><a href={resources.specSheet}>Product Spec Sheet</a></li>
                </ul>
            </TabPanel>
            <TabPanel value={this.state.tabValue} index={2}>
                <p>{product.other}</p>
            </TabPanel>
        </Card>
        );
    }
  }

  export default ProductInformationComponent