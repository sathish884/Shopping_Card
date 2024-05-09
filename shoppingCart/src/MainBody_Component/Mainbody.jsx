import PropTypes from "prop-types";
import './Mainbody.css';
import { useState } from "react";
import Header from "../Header_Component/Header";

function Mainbody(props) {

    const columnStyle = {
        padding: "100px"
    };
    const list = props.listItems;

    const [arryData, setArrayData] = useState(list)

    // Initialize an array to hold button texts, initially all set to "Add Cart"
    const [btnTexts, setBtnTexts] = useState(Array(list.length).fill("Add Cart"));

    const [count, setCount] = useState(0);

    const btnClickFunction = (index, texts) => {
        // console.log(texts[index]);
        setBtnTexts(prevBtnTexts => {
            const newBtnTexts = [...prevBtnTexts];
            newBtnTexts[index] = prevBtnTexts[index] === "Add Cart" ? "Remove Cart" : "Add Cart";
            return newBtnTexts;
        });

        const btns = setCount(texts[index] === "Add Cart" ? count + 1 : count - 1)

        return btns

    };

    // Delete card
    // const cardDelete = (index, texts) => {
    //     const updatedData = arryData.filter((_, i) =>
    //         i !== index
    //     )
    //     setArrayData(updatedData)
    //     setCount(count - 1)

    // }

    console.log(list);
    return (

        <div>
            <Header cartCount={count} />

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
                            <span className={(item.name === "Sale Item") || (item.name === "Popular Item") || (item.name === "Fancy Product") ? "badge text-bg-warning card-badge" : "badge-none"}>sale</span>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.rate}</p>
                                <button className="btn btn-primary" onClick={() => btnClickFunction(index, btnTexts)}>{btnTexts[index]}</button>
                                {/* <button className="btn btn-success" onClick={() => cardDelete(index, btnTexts)}>Delete</button> */}
                                {/* <p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis expedita molestiae est corporis aspernatur porro nisi eius perferendis non pariatur quo impedit dolore totam excepturi eaque, doloremque inventore, earum cupiditate?</p> */}
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )



}

export default Mainbody