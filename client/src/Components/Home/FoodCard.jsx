import "./Home.css";
import { auth } from "../../Authorization/FirebaseConfig";
import React, { Component } from "react";

export default function FoodCard(props) {
  const { name, quantity, expiryDate } = props;

  return (
    <div className="foodcard">
      <div className="foodname">Name: {name}</div>
      <hr></hr>
      <div className="foodamount">Amount: {quantity} lbs</div>
      <hr></hr>
      <div className="foodexpiry">Expiry Date: {expiryDate}</div>
    </div>
  );
}
