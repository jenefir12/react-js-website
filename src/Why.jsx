import React from 'react'
import {FaSmile,FaClock,FaDesktop,FaMobile} from 'react-icons/fa';

const Why = () => {
    return (
        <>
        <h3 className="text-center mt-5 pt-4">Why Us</h3>
        <div className="container">
            <div className="row">
                <p className="text-center">As the best software company in Pakistan, Atule strives to be the best. With our application services, you can take advantage of diverse technologies like Web, Mobile, and Desktop. With our competitive products and services, Atrule has become a global leader in the software industry and has an impressive reputation among its clients.</p>
            </div>
        </div>
        <div className="container">
            <div className="row mt-5 mb-5 text-center">
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 bg-info pt-4 pb-4">
                    <FaSmile style={{fontSize:'2rem'}} className="text-white"/>
                    <h2 className="pt-2">25+</h2>
                    <h4>Happy Global Clients</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 bg-danger pt-4 pb-4">
                    <FaClock style={{fontSize:'2rem'}} className="text-white"/>
                    <h2 className="pt-2">120K+</h2>
                    <h4>Developments Hours</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 bg-primary pt-4 pb-4">
                    <FaDesktop style={{fontSize:'2rem'}} className="text-white"/>
                    <h2 className="pt-2">50+</h2>
                    <h4>Web Applications</h4>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 col-12 bg-warning pt-4 pb-4">
                    <FaMobile style={{fontSize:'2rem'}} className="text-white"/>
                    <h2 className="pt-2">20+</h2>
                    <h4>Mobile Applications</h4>
                </div>
            </div>
        </div>
        </>
    )
}

export default Why;
