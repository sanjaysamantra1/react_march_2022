/* eslint-disable react/prop-types */
import React from "react";

export default function ProductCard({ id, name, price }) {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{id}</h5>
          <p className="card-text">{name}</p>
          <p className="card-text">{price}</p>
        </div>
      </div>
    </div>
  );
}
