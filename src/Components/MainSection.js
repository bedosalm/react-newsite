import React, { Component } from 'react';
import {allData} from "../data";
import Provider from './Provider';

class MainSection extends Component {
     state = {
        dataList : allData
     }
    render() {
        return (
            <section className="head-section">
               <div className="container">
            <div className="row">
                <div className="col-12 col-md-6">
                   <p>2000+ services Providers on board</p>
                    <div className="providers mx-auto">
                     {this.state.dataList.map((item,index) => {
                       return (
                           <Provider key={index} item={item} />
                       )
                     })

                     }
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-content">
                    <h4>Register New</h4>
                    <form>
                     <div className="row">
                        <div class="col-md-6">
                        <input type="text" className="form-control"
                         placeholder="Fullname" 
                         required />
                        </div>
                        <div class="col-md-6">
                        <input type="text" className="form-control"
                         placeholder="jop title" 
                         required />
                        </div>
                        <div class="col-md-6">
                        <input type="text" className="form-control"
                         placeholder="email" 
                         required />
                        </div>
                        <div class="col-md-6">
                        <input type="number" className="form-control"
                         placeholder="number" 
                         required />
                        </div>
                        <div class="col-md-6">
                        <select>
                            <option selected >Category</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </div>
                     </div>
                     <button type="submit" className="btn btn-danger">Register New</button>
                     </form>
                     </div>
                </div>
              </div>
              </div>
            </section>
        );
    }
}

export default MainSection;