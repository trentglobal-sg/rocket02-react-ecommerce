import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Switch } from 'wouter'
import ProductPage from "./ProductPage";
import RegisterPage from "./RegisterPage";
import FlashMessage from "./FlashMessage";
import ShoppingCart from "./ShoppingCart";

import "./App.css";


function App() {



  return <>
    
    <Navbar />
  
    <FlashMessage/>

    {/* The <Switch> is part of the screen that will change depending on the URL */}
    <Switch>
      <Route path="/" component={HomePage}/>
      <Route path="/products" component={ProductPage}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/cart" component={ShoppingCart}/>
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>

}

export default App;