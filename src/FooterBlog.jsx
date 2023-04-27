import React from "react";

function Card() {
  return (
    <div className="card">
      <img src=" " alt="" />
      <p></p>
    </div>
  );
}
export default function Footer() {
  return (
    <footer>
      <div id="full">
        <h5>Short read</h5>
        <div id="fcon">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </footer>
  );
}
