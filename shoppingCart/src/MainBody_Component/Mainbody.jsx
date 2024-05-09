import PropTypes from "prop-types";
import './Mainbody.css';
import { useState } from "react";
import Header from "../Header_Component/Header";

function Mainbody(props) {

  // Define a constant object for styling the columns with padding
const columnStyle = {
    padding: "100px"
};

// Extract listItems from props
const list = props.listItems;

// Initialize state for the array data
const [arryData, setArrayData] = useState(list);

// Initialize state for button texts, initially all set to "Add Cart"
const [btnTexts, setBtnTexts] = useState(Array(list.length).fill("Add Cart"));

// Initialize state for count
const [count, setCount] = useState(0);

// Function to handle button click event
const btnClickFunction = (index, texts) => {
    // Update button texts based on current state
    setBtnTexts(prevBtnTexts => {
        const newBtnTexts = [...prevBtnTexts];
        newBtnTexts[index] = prevBtnTexts[index] === "Add Cart" ? "Remove Cart" : "Add Cart";
        return newBtnTexts;
    });

    // Update count based on button text
    const btns = setCount(texts[index] === "Add Cart" ? count + 1 : count - 1);

    // Return updated count
    return btns;
};

// Console log the list
console.log(list);

// Render JSX
return (
    <div>
        {/* Header component with cart count */}
        <Header cartCount={count} />

        <div className="row shop-content">
            <div className="col" style={columnStyle}>
                <h1>Shop in Style</h1>
                <p>With this shop home page template</p>
            </div>
        </div>
        <div className="row">
            {arryData.map((item, index) => (
                <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-5" key={item.id}>
                    <div className="card text-center" style={{ width: "18rem" }}>
                        {/* Image */}
                        <img src={item.imageURL} className="card-img-top" alt="..." height={150} />
                        {/* Badge for special items */}
                        <span className={item.quality === "premium" ? "badge text-bg-warning card-badge" : "badge-none"}>sale</span>
                        <div className="card-body">
                            {/* Item name */}
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.description}</p>
                            <p style={{color:"#57e32c"}}><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></p>
                            {/* Item rate */}
                            <p className="card-text"><b>{item.rate}</b></p>
                            {/* Button to add/remove from cart */}
                            <button className="btn btn-primary" onClick={() => btnClickFunction(index, btnTexts)}>{btnTexts[index]}</button>
                            {/* Delete button (commented out) */}
                            {/* <button className="btn btn-success" onClick={() => cardDelete(index, btnTexts)}>Delete</button> */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);



}

export default Mainbody