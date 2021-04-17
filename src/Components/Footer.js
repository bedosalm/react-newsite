import React, { Component } from 'react';
import { FaFacebookF,FaTwitter,FaInstagram,FaLinkedinIn} from "react-icons/fa";

class Footer extends Component {
    render() {
        return (
            <footer >
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/images/sitelogo.png"/> 
                    </div>
                    <div className="col-6">
                        <ul className="footer-list">
                           <li>
                            <span>
                                <FaFacebookF />
                            </span>
                           </li>
                           <li>
                           <span>
                               <FaInstagram />
                           </span>
                           </li>
                           <li>
                           <span>
                               <FaLinkedinIn />
                           </span>
                           </li>
                           <li>
                           <span>
                               <FaTwitter />
                           </span>
                           </li>
                        </ul>
                    </div>
                </div>
              <div className="second-content">
              <div className="row">
                  <div className="col-sm-12 col-md-6">
                    <ul className="ul-item">
                        <li>
                            <a href="">support</a>
                        </li>
                        <li>
                            <a href="">understand</a>
                        </li>
                        <li>
                            <a href="">terms&regluation</a>
                        </li>
                    </ul>
                 </div>
                 <div className="col-sm-12 col-md-6">
                     <p className="copyright">inploy 2020 all rights reserved</p>
                 </div>
              </div>
              </div>
            </div>
            </footer>
        );
    }
}

export default Footer;