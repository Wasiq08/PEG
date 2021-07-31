import React from "react";
import NavBar from './nav';
import Header from './header';
import Footer from './footer';


const RegistrationComponent = () => {
    return <div>
        <NavBar />
        <Header />

        <div className="center">
            <h1>Registration Form</h1>
        </div>

        {/* <!-- Footer --> */}
        <Footer />
    </div>
}

export default RegistrationComponent;
