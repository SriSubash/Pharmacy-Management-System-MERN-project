import React from "react";
import {NavLink} from "react-router-dom";
import "../styles/Footer.css"

function Footer() {
  return (
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><NavLink exact to="#">Medicines</NavLink></li>
                            <li><NavLink exact to="#">Orders</NavLink></li>
                            <li><NavLink exact to="#">Hosting</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><NavLink exact to="#">Company</NavLink></li>
                            <li><NavLink exact to="#">Team</NavLink></li>
                            <li><NavLink exact to="#">Careers</NavLink></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>E-pharmacy</h3>
                        <p>E-pharmacy, short for electronic pharmacy or online pharmacy, refers to the practice of buying and selling pharmaceutical products over the internet. It involves the online ordering, dispensing, and delivering of prescription medications, over-the-counter drugs, and other health-related products directly to consumers.</p>
                    </div>
                   
                </div>
                <p className="copyright">E-pharmacy © 2021</p>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
