import React from 'react';
import HomePage from './HomaPage';
import {Route,Switch} from 'react-router';
import About from '../src//Pages/About';
import Portfolio from '../src/Pages/Portfolio';
import Technology from '../src/Pages/Technology';
import Position from '../src/Pages/Position';
import Office from '../src/Pages/Office';
import Process from '../src/Pages/Process';
import Service from '../src/Pages/Service';
import Contact from '../src/Pages/Contact';
import Error from '../src/Pages/Error';



const NavBar = () => {
    return (
        <>
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route exact path="/whyus" component={About}></Route>
            <Route exact path="/portfolio" component={Portfolio}></Route>
            <Route exact path="/technology" component={Technology}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/office" component={Office}></Route>
            <Route exact path="/positions" component={Position}></Route>
            <Route exact path="/service" component={Service}></Route>
            <Route exact path="/process" component={Process}></Route>
            <Route component={Error}></Route>
        </Switch>
        </>
    )
}
export default NavBar;

















// import React,{useState} from 'react';
// import { FaFacebook } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';
// import { FaTwitter } from 'react-icons/fa';
// import { FaHamburger } from 'react-icons/fa';

// const NavBar = () => {
//     const[items,setItems] = useState(false);
//     const myFun = () => {
//           setItems(!items);
//     }
//     return (
//        <>
//          <nav classNameName="main-nav">
//              {/* logo code */}
//              <div className="logo">
//                  <h2><span>R</span>eact-Js</h2>
//              </div>
//              {/* Menu link */}
//              <div className={items ? "menu-link" : "menu-link-first"}>
//                  <ul>
//                      <li>
//                          <a href="#">Home</a>
//                      </li>
//                      <li>
//                          <a href="#">About</a>
//                      </li>
//                      <li>
//                          <a href="#">Service</a>
//                      </li>
//                      <li>
//                          <a href="#">Contact</a>
//                      </li>
//                  </ul>
//                  <div className="burger" onClick={myFun}>
//                        <FaHamburger/>
//                  </div>
//              </div>
//              {/* Social Media Links */}
//              <div className="social-media">
//                  <div className="social-media-desktop">
//                      <ul>
//                          <li><a href="#"></a><FaFacebook/></li>
//                          <li><a href="#"></a><FaTwitter/></li>
//                          <li><a href="#"></a><FaInstagram/></li>
//                      </ul>
//                  </div>
//              </div>
//          </nav>
//          {/* Hero Section */}
//          <section className="hero-section">
//              <p>Welcome to</p>
//              <h2>React Js World</h2>
//          </section>
//        </>
//     )
// }

// export default NavBar;
