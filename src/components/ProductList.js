import React, { Component } from "react";
import Votes from "./Votes";
import "../App.css";
import ProductHuntSubmitForm from "./ProductHuntSubmitForm";

class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products_list: [
        {
          id: 1,
          name: "camera",
          likes: 1,
          dislikes: 1,
          description: "this product is camera which has 100mpx",
          imageurl: "/images/camera.jpg",
        },
        {
          id: 2,
          name: "headset",
          likes: 2,
          dislikes: 1,
          description: "this product is one of the latest with high bass",
          imageurl: "/images/headPhones.jpg",
        },
        {
          id: 3,
          name: "watch",
          likes: 3,
          dislikes: 1,
          description: "this watch has call and face recognition feature ",
          imageurl: "/images/watch.jpg",
        },
      ],
    };
    this.handleProducts = this.handleProducts.bind(this);
    this.addProducts = this.addProducts.bind(this);
  }

  handleProducts = (id, likes) => {
    const updatedList = this.state.products_list.map((item) => {
      if (item.id === id && likes === 1) {
        item.likes++;
      } else if (item.id === id && likes === -1) {
        item.dislikes--;
      }
      return item;
    });
    this.setState({
      products_list: updatedList,
    });
  };

  addProducts(id,name, description, imageurl, likes, dislikes) {
    const newProductList = {
      id:id,
      name: name,
      description: description,
      imageurl: imageurl,
      likes: likes,
      dislikes: dislikes,
    };
    this.setState({
      products_list: [...this.state.products_list, newProductList],
    });
  }

  render() {
    const sorted_products_list = this.state.products_list.sort(
      (a, b) => b.likes - a.likes
    );
    const products_list = sorted_products_list.map((item) => (
      <Votes handleProducts={this.handleProducts} item={item} />
    ));

    return (
      <div className="center">
        <br />
        <br />
        <br />
        {products_list}
        <ProductHuntSubmitForm addProducts={this.addProducts}/>
      </div>
    );
  }
}
export default ProductList;
