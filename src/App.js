
import React, {Component} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

class App extends Component {
  render() {
    return (
      <div>
          <Navbar />
          <ProductList/>
      </div>
    );
  }
}
export default App;
