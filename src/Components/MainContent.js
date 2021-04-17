import React, { Component } from 'react';
import Header from "./Header"
import "bootstrap/dist/css/bootstrap.css"
import MainSection from './MainSection';
import Services from './Services';
import ContactUs from './ContactUs';
import Footer from './Footer';


class MainContent extends Component {
    render() {
        return (
            <div>
                <Header />
                <MainSection />
                <Services />
                <ContactUs />
                <Footer />
            </div>
        );
    }
}

export default MainContent;