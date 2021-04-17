import React, { Component } from 'react';
import {FaCheck} from "react-icons/fa";

class Provider extends Component {
    render() {
        const {name,jop,rate,bgphoto,photo} = this.props.item
        return (
            <div className="provider">
                         <div className="img-content">
                           <img src={bgphoto}/>
                         </div>
                         <div className="d-flex middle-content">
                             <span>
                             <FaCheck />
                             </span>
                             <img src={photo} />
                             <span>{rate}</span>
                         </div>
                         <div className="info text-center">
                             <h5>{name}</h5>
                             <p>{jop}</p>
                             <span>show More</span>
                         </div>
            </div>
        );
    }
}

export default Provider;