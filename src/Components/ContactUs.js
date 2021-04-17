import React, { Component } from 'react';
import { FaFacebookF,FaGlobe,FaTwitter,FaCheck,FaInstagram,FaVimeoV,FaWhatsappSquare ,FaLinkedinIn,FaYoutube} from "react-icons/fa";

class ContactUs extends Component {
    state = {
        call: "",
        email : "",
        input:""
    }
    
    handelChange = (e) => {
       const name = e.target.name;
       const value = e.target.checked
       this.setState({
           input : name
       })
   }

    render() {
        return (
            <div className="Contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="contact">
                             <h4>Contact <span>Info@inploy.me</span></h4>
                             <p>For further assistance with projects or pre registration 
                             How would like us to contact you?
                             </p>
                            </div>
                            <form onSubmit={this.handelSubmit}>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="call" id="flexRadioDefault1" onChange={this.handelChange} />
                            <label className="form-check-label" for="flexRadioDefault1" >
                                Call
                            </label>
                            </div>
                            <div className="form-check">
                            <input className="form-check-input" type="radio" name="email"  onChange={this.handelChange}/>
                            <label className="form-check-label" for="flexRadioDefault2">
                                Email
                            </label>
                            </div>
                            <input className="my-3" type="text" value={this.state.input} onChange={this.handelChange}/>
                            <button type="submit" className="btn btn-danger my-1 d-block">Send</button>
                            </form>
                        </div>
                        <div className="col-lg-8">
                            <div className="social-content">
                              <img className="lab-img" src="/images/labimg.png"/>
                              <img className="top-logo" src="/images/top-logo.png"/>
                              <div className="social-links">
                                <p>
                                  012555669897 sohila-kandil@hotmai.com
                                </p>
                                <ul className="social-list">
                                    <li>
                                    <span>
                                        <FaFacebookF />
                                        </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaGlobe />
                                        </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaTwitter />
                                    </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaInstagram/>
                                    </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaLinkedinIn />
                                    </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaYoutube />
                                    </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaVimeoV />
                                     </span>
                                    </li>
                                    <li>
                                    <span>
                                        <FaWhatsappSquare />
                                     </span>
                                    </li>
                                </ul>
                              </div>
                              <div className="provider">
                                <div className="img-content">
                                <img src="/images/img1-bg.png" />
                                </div>
                                <div className="d-flex middle-content">
                                    <span><FaCheck /></span>
                                    <img src="/images/img1.png" />
                                    <span>8.5</span>
                                </div>
                                <div className="info text-center">
                                    <h5>sohila kandil</h5>
                                    <p>grafic designer</p>
                                    <span>show More</span>
                                </div>
                             </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;