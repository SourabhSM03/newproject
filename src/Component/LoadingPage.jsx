import React from "react";
import Appbar from "./Appbar";
import Carosal from "./Carosal";
import Cards from "./Cards";
import Footer from "./Footer";

export default function LoadingPage() {
  return (
    <div>
      <Appbar />
      <Carosal/>
      <Cards />
      <Footer />
    </div>
  );
}
