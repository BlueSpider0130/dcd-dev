import React from "react";
import BodyWrapper from "./statics/BodyWrapper";
import Footer from "./statics/Footer";
import Navbar from "./statics/Navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      <BodyWrapper>{children}</BodyWrapper>
      <Footer></Footer>
    </>
  );
}

export default Layout;
