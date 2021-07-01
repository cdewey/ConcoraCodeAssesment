import ProductDetailsPage from './pages/product-details/product-details-page';
import ProductListPage from './pages/product-list/product-list-page';
import {
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {

  //let match = useRouteMatch();

  return (
      
      <div className="App">
        <header className="App-header">
          WILE E. CO.
        </header>
        <Switch>
          <Route path="/products/:id" component = {ProductDetailsPage}></Route>
          <Route path="/products">
            <ProductListPage></ProductListPage>
          </Route>
          <Route path="/">
            <ProductListPage></ProductListPage>
          </Route>
        </Switch>
        <footer className="App-footer"></footer>
      </div>
        
      
  );
}

// function Error() {
//   return <h2>About</h2>;
// }

export default App;
