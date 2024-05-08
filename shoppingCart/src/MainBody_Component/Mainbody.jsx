import PropTypes from "prop-types";
import './Mainbody.css';
import { useState } from "react";

function Mainbody(props) {

    const columnStyle = {
        padding: "100px"
    };
    const list = props.listItems;

    const [arryData, setArrayData] = useState(list)

    // Initialize an array to hold button texts, initially all set to "Add Cart"
    const [btnTexts, setBtnTexts] = useState(Array(list.length).fill("Add Cart"));

    const btnClickFunction = (index) => {
        setBtnTexts(prevBtnTexts => {
            const newBtnTexts = [...prevBtnTexts];
            newBtnTexts[index] = prevBtnTexts[index] === "Add Cart" ? "Remove Cart" : "Add Cart";
            return newBtnTexts;
        });
    };

    const cardDelete = (index) => {
        const updatedData = arryData.filter((_, i) =>
            //  console.log(i !== index),
            i !== index

        )
        setArrayData(updatedData)
    }

    console.log(list);
    return (
        <div>
            <div className="row shop-content">
                <div className="col" style={columnStyle}>
                    <h1>Shop in Style</h1>
                    <p>With this shop home page template</p>
                </div>
            </div>
            <div className="row">
                {arryData.map((item, index) => (
                    // console.log(typeof item.id),
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-5" key={item.id}>
                        <div className="card text-center" style={{ width: "18rem" }} >
                            <img src={item.imageURL} className="card-img-top" alt="..." height={150} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.rate}</p>
                                <button className="btn primary" onClick={() => btnClickFunction(index)}>{btnTexts[index]}</button>
                                <button className="btn success" onClick={() => cardDelete(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )



}

export default Mainbody