import React from "react";
import PropTypes from "prop-types";
// import Header from "./Header_Component/Header";
import Footer from "./Footer_Component/Footer";
import Mainbody from "./MainBody_Component/Mainbody"


function App() {



  const cardItems = [
    {
      id: 1,
      imageURL: "https://m.media-amazon.com/images/I/81ZUL5rCfmL._AC_UY1100_.jpg",
      name: "Fancy Product",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 2,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oWwGTHoldCW3-Fz2MSPhMCAu-w1GogRWRY71mJHO2w&s",
      name: "Special Item",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 3,
      imageURL: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg?imageView2/2/w/500/q/60/format/webp",
      name: "Sale Item",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 4,
      imageURL: "https://www.shaadibaraati.com/vendors-profile/07fadb7d0442d1771ae6dc5b564a9df9.png",
      name: "Popular Item",
      rate: "$40.00",
      buttonCon: "Add Cart"
    },

    {
      id: 5,
      imageURL: "https://5.imimg.com/data5/SELLER/Default/2022/1/US/AN/IE/2985467/tops.jpg",
      name: "Special Product",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 6,
      imageURL: "https://fcity.in/images/products/65565973/kawdd_512.jpg",
      name: "Popular Item",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 7,
      imageURL: "https://i.pinimg.com/736x/a5/b9/7f/a5b97fa9f891cffc7335842be36ac85d.jpg",
      name: "Fancy Item",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 8,
      imageURL: "https://cdn.luxe.digital/media/20220221165101/best-men-sunglasses-randolph-engineering-luxe-digital.jpg",
      name: "Sale Item",
      rate: "$20.00 - $18.00",
      buttonCon: "Add Cart"
    },
    {
      id: 9,
      imageURL: "https://n1.sdlcdn.com/imgs/a/b/k/SDL805639030_1366971040_image1-2dd86.jpg",
      name: "Popular Product",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 10,
      imageURL: "https://www.urbantouch.in/cdn/shop/products/LRFESJTR0051_2.jpg?v=1592820119&width=1946",
      name: "Fancy Product",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 11,
      imageURL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23707466/2023/6/21/ba5896b5-1f89-410b-93d5-70d6be55bd411687336002837HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
      name: "Sale Item",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 12,
      imageURL: "https://m.media-amazon.com/images/I/61MDwg+jkzL._AC_SX342_.jpg",
      name: "Special Item",
      rate: "$40.00 - $25.00",
      buttonCon: "Add Cart"
    },

  ]

  return (
    <div className='container-fluid'>
      {/* <Header /> */}
      <Mainbody listItems={cardItems} />
      <Footer />
    </div>
  )



}

export default App
