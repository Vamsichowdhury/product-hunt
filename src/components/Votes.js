import React from "react";
import "../App.css";
function Votes(props) {
  return (
    <div className="main-container">
      <div className="item-container">
        <img className="image" src={props.item.imageurl} alt="gadget" />
        <div className="content">
          <h1>{props.item.name}</h1>
          <hr />
          <p>{props.item.description}</p>
        </div>
        <div className="votes-container">
          <div className="votes">
            <h1>{props.item.likes}</h1>
            <i
              className="likes"
              onClick={() => props.handleProducts(props.item.id, 1)}
              class="big thumbs up icon"
            ></i>
          </div>

          <div className="votes">
            <h1>{props.item.dislikes}</h1>
            <i
              className="likes"
              onClick={() => props.handleProducts(props.item.id, -1)}
              class="big thumbs down icon"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Votes;
