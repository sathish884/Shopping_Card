import React from "react";
import UseState from "./UseState";
import PropTypes from "prop-types";
import Footer from "./Footer_Component/Footer"
import Header from "./Header_Component/Header"
import Mainbody from "./MainBody_Component/Mainbody"
// import { Props } from "./Props";

function App() {



  const cardItems = [
    {
      id: 1,
      imageURL: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Fancy Items",
      rate: "$40.00 - $80.00",
      buttonCon: true
    },
    {
      id: 2,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk-TDMURdS584MBVyWqDYw16IiK-S4E065XCnitQ8mqkwtSjghr1r2PLS-GhqNF8jQOyw&usqp=CAU",
      name: "Special Item",
      rate: "$20.00 - $18.00",
      buttonCon: true
    },
    {
      id: 3,
      imageURL: "https://m.media-amazon.com/images/I/61MDwg+jkzL._AC_SX342_.jpg",
      name: "Sale Item",
      rate: "$40.00 - $25.00",
      buttonCon: true
    },
    {
      id: 4,
      imageURL: "https://m.media-amazon.com/images/I/71LACsov-LL._AC_SL1500_.jpg",
      name: "Popular Item",
      rate: "$40.00",
      buttonCon: true
    },
    {
      imageURL: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Fancy Product",
      rate: "$40.00 - $80.00"
    },
    {
      imageURL: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Fancy Product",
      rate: "$40.00 - $80.00"
    },
    {
      imageURL: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Fancy Product",
      rate: "$40.00 - $80.00"
    },
    {
      imageURL: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Fancy Product",
      rate: "$40.00 - $80.00"
    }
  ]

  return (
    <div className='container-fluid'>
      <Header />
      <Mainbody listItems={cardItems} />
      <Footer />
    </div>
  )



}

export default App
