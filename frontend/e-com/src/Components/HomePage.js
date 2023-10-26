import React from "react";
import Home2 from "./Home2";
import Catlog from "./Catlog";
import Deal from "./Deal";
import Footer from "./Footer";
import Header from "./Header";

const HomePage = () => {
  return (
    <div style={{ margin:"-8px",  backgroundColor:"gainsboro"}}>
        <Header />
        <Home2 />
        <Catlog />
        <Deal />
        <Footer />
    </div>
  )
}

export default HomePage