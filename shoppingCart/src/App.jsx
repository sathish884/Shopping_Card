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
      name: "The Souled Store",
      description:"Official Daffy Duck: Go Hawaii Men Holiday Shirts",
      rate: "$40.00 - $80.00",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 2,
      imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_oWwGTHoldCW3-Fz2MSPhMCAu-w1GogRWRY71mJHO2w&s",
      name: "Pepe Jeans",
      description:"Men's 511 Slim Fit Mid Rise Jeans",
      rate: "$22.00",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 3,
      imageURL: "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/d6202f062d4659943ebf353d99e4c219.jpg?imageView2/2/w/500/q/60/format/webp",
      name: "Red Tape",
      description:"Classic Rounded Toe, Soothing Insole & Impact-Resistant Comfort",
      rate: "$30.0",
      buttonCon: "Add Cart"
    },
    {
      id: 4,
      imageURL: "https://www.shaadibaraati.com/vendors-profile/07fadb7d0442d1771ae6dc5b564a9df9.png",
      name: "Popular Item",
      description:"Official Daffy Duck: Go Hawaii Men Holiday Shirts",
      rate: "$10.00 - $25.0",
      buttonCon: "Add Cart"
    },

    {
      id: 5,
      imageURL: "https://5.imimg.com/data5/SELLER/Default/2022/1/US/AN/IE/2985467/tops.jpg",
      name: "Uptownie Lite",
      description:"Womens's Printed Cotton Stretchable Draped Crop Top",
      rate: "$50.00 - $60.00",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 6,
      imageURL: "https://fcity.in/images/products/65565973/kawdd_512.jpg",
      name: "Rekha Maniyar",
      description:"Women's Jacquard Linen Saree With Unstitched Blouse Piece",
      rate: "$80.00",
      buttonCon: "Add Cart"
    },
    {
      id: 7,
      imageURL: "https://i.pinimg.com/736x/a5/b9/7f/a5b97fa9f891cffc7335842be36ac85d.jpg",
      name: "JC JUMMY COUTURE",
      description:"Best Women Summer Casual Warty Wear White Embroider",
      rate: "$66.00",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 8,
      imageURL: "https://cdn.luxe.digital/media/20220221165101/best-men-sunglasses-randolph-engineering-luxe-digital.jpg",
      name: "Red Bull",
      description:"Redbull Spect Eyewear Sunglasses Nick-003",
      rate: "$20.00 - $18.00",
      buttonCon: "Add Cart"
    },
    {
      id: 9,
      imageURL: "https://n1.sdlcdn.com/imgs/a/b/k/SDL805639030_1366971040_image1-2dd86.jpg",
      name: "Popular Product",
      description:"Official Daffy Duck: Go Hawaii Men Holiday Shirts",
      rate: "$42.00 - $71.00",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 10,
      imageURL: "https://www.urbantouch.in/cdn/shop/products/LRFESJTR0051_2.jpg?v=1592820119&width=1946",
      name: "Spykar",
      description:"Men's Rover Regular Fit Mid-Rise Jeans",
      rate: "$88.0",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 11,
      imageURL: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/23707466/2023/6/21/ba5896b5-1f89-410b-93d5-70d6be55bd411687336002837HRXbyHrithikRoshanMenWhiteMeshRunningNon-MarkingShoes1.jpg",
      name: "Bacca Bucci",
      description:"Bacca Bucci Men's Comfy Mid-Top Casual Chunky Streetwear Fashion Sneakers",
      rate: "$350.00 - $45.00",
      buttonCon: "Add Cart",
      quality:"premium"
    },
    {
      id: 12,
      imageURL: "https://m.media-amazon.com/images/I/61MDwg+jkzL._AC_SX342_.jpg",
      name: "U.S. POLO ASSN",
      description:"Men Official Garfield: Made to Lounger White Printed Summer",
      rate: "$66.00",
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
