import React from 'react';
import './Header.css';

export default function Header(props) {
    return (
        <div className='row'>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid mx-5" style={{ padding: "5px" }}>
                    <a href='#' className="navbar-brand text-primary">
                    <img className='img-thumbnail' src="images.png" alt="Bootstrap" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-success" type="submit"><i className="bi bi-cart-fill"></i> &nbsp; Cart  &nbsp;<span className="badge text-bg-success">{props.cartCount}</span></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
