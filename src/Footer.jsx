import React from 'react'

const Footer = () => {
    return (
        <>
        <div className="container-fluid mt-5 pb-5 bg-dark">
            <div className="row mt-5 mx-5 pt-5 text-white">
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <h3>React-Js</h3>
                    <p>DesignX was founded in 2020 and in this short period we proved that we are #1 in about our services. That’s why, now we are serving different clients globally.</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <h3>Sitemap</h3>
                    <div className="main-home">
                        <p>Home</p>
                        <p>Service</p>
                        <p>About</p>
                        <p>Why-Us</p>
                        <p>Gallery</p>
                        <p>Contact</p>
                        <p>Portfolio</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <h3>Join Us</h3>
                    <p>Do you have what it takes to be a part of Atrule talent network, send your resume for our future openings at hr@atrule.com</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-12">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#" className="fab fa-facebook mx-2"></a>
                        <a href="#" className="fab fa-instagram mx-2"></a>
                        <a href="#" className="fab fa-twitter mx-2"></a>
                        <a href="#" className="fab fa-linkedin mx-2"></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;
