import React, { Component } from "react";
import "../App.css";
class ProductHuntSubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      imageurl: "",
    };
    this.handleForm = this.handleForm.bind(this);
  }

  handleForm(event) {
    event.preventDefault();
    if (
      this.state.name === "" ||
      this.state.description === "" ||
      this.state.imageurl === ""
    ) {
      return;
    } else {
      this.props.addProducts(
        Date.now(),
        this.state.name,
        this.state.description,
        this.state.imageurl,
        0,
        0
      );
      this.setState({
        name: "",
        description: "",
        imageurl: "",
      });
    }
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <h1>Add Product</h1>
        <div className="formBackground">
          <form onSubmit={this.handleForm}>
            <input
              type="text"
              placeholder="enter product title"
              value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <input
              type="text-area"
              placeholder="enter product discription"
              value={this.state.description}
              onChange={(event) =>
                this.setState({ description: event.target.value })
              }
            />
            <input
              type="text"
              placeholder="enter image link"
              value={this.state.imageurl}
              onChange={(event) =>
                this.setState({ imageurl: event.target.value })
              }
            />
            <button>Add product</button>
          </form>
        </div>
      </div>
    );
  }
}
export default ProductHuntSubmitForm;
