import React from "react";
import "./stylesBlog.css";
import HeaderBlog from "./HeaderBlog.jsx";
import MainBlog from "./mainBlog.jsx";
import FooterBlog from "./FooterBlog.jsx";

export default function App() {
  return (
    <div className="App">
      <HeaderBlog />
      <MainBlog />
      <FooterBlog />
    </div>
  );
}
