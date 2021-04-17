import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
          <div className="container">
      <div className="row">
       <div className="col-12 text-center">
        <div className="Header">
         <h1 className="m-0">Welcome to inpoly</h1>
         <p>Register now and secure your spot on top of your category</p>
         <div className="btn-container">
           <button className="btn btn-danger">register</button>
           <button className="btn btn-light">hallow</button>
         </div>
         </div>
       </div>
      </div>
      </div>
        );
    }
}

export default Header;