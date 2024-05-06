import React from 'react';
import './Mainbody.css';

function Mainbody(props) {

    const columnStyle = {
        padding: "100px"
    };
    const list = props.listItems;

    console.log(list);
    return (
        <div>
            <div className="row shop-content">
                <div className="col" style={columnStyle}>
                    <h1>Shop in Style</h1>
                    <p>With this shop home page template</p>
                </div>
            </div>
            <div className='row'>
                {list.map((item, index) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-5">
                        <div className="card text-center" style={{ width: "18rem" }}>
                            <img src={item.imageURL} className="card-img-top" alt="..." height={150} />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <p className="card-text">{item.rate}</p>
                                <button className="btn">{item.buttonCon}</button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default Mainbody