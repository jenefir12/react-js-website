import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <div className="main-nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-primary mx-2" href="#">React Js</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ms-auto mx-2">
                            <li className="nav-item">
                             <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/service">Service</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/whyus">About</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/office">Office</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/process">Process</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/technology">Technologies</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="nav-link text-white" to="/positions">Positions</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="btn btn-outline-info mx-2" to="#">Login</NavLink>
                            </li>
                            <li className="nav-item">
                             <NavLink className="btn btn-outline-primary" to="#">Register</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="row text-white mx-3 h-100 align-items-center d-flex mb-5">
                    <div className="wrapper col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="static-txt">We build websites in</div>
                        <ul className="dynamic-txt">
                            <li><span>React-Js</span></li>
                            <li><span>Java-Script</span></li>
                            <li><span>Html5 & Css3</span></li>
                            <li><span>Bootstrap5</span></li>
                        </ul>
                    </div>
            </div> */}
        </div>
        </>
    )
}

export default Nav;
