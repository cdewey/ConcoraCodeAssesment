import ProductDetailsPage from './pages/product-details/product-details-page';
import ProductListPage from './pages/product-list/product-list-page';
import AddProductPage from './pages/add-product/add-product-page';
import styled from 'styled-components'
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { useState, useEffect  } from 'react';
import config from 'react-global-configuration';
const axios = require('axios').default;

function App() {

  const [isLoaded, setLoading] = useState(false);
  const [siteConfig, setConfig] = useState();

  useEffect(() => {
    axios.get("http://localhost:8080/config/1").then(response => {
      console.log(response);
      setConfig(response.data.siteConfig);
      setLoading(true);
      config.set({'siteConfig' : response.data.siteConfig})
    })
    .catch((error) => {
      // handle error
      console.log(error);
      return <div className="App">Error</div>;
    })
  }, []);

  if (!isLoaded) {
    return <div className="App">Loading...</div>;
  }

  const Header = styled.header`
    background-color: ${siteConfig.headerColor};
  `;

  const Footer = styled.footer`
    background-color: ${siteConfig.headerColor};
  `;

  const AppContainer = styled.div`
    font : ${siteConfig.fontStyle}
  `;

  return (
      
      <AppContainer className="App">
        <Header className="App-header">
          <div>{siteConfig.companyName}</div>
          <div><img src={siteConfig.companyLogo} alt="Logo" height="60" width="80"></img></div>
        </Header>
        <Switch>
          <Route path="/products/:id" component = {ProductDetailsPage}></Route>
          <Route path="/products">
            <ProductListPage></ProductListPage>
          </Route>
          <Route path="/add_product">
            <AddProductPage></AddProductPage>
          </Route>
          <Route path="/">
            <ProductListPage></ProductListPage>
          </Route>
        </Switch>
        <Footer className="App-footer"></Footer>
      </AppContainer>
        
      
  );
}

// function Error() {
//   return <h2>About</h2>;
// }

export default App;
