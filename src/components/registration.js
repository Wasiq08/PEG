import React, { useState } from "react";
import NavBar from './nav';
import Header from './header';
import Footer from './footer';


const RegistrationComponent = () => {

    const [userDetails, setUserDetails] = useState({})

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target
        setUserDetails((prevState) => {
            return { ...prevState, [name]: name === "agreement" ? checked : value }
        })
    }

    const handleSubmit = () => {
        console.log(userDetails)
    }

    return <div>
        <NavBar />
        <Header />

        <div className="center">
            <h1>Registration Form</h1>
        </div>

        <div className="form-container bg_green color_white mt-5 mb-5">
            <div className="row m-0">
                <div className="col-md-6 col-sm-12 p-0">
                    <input type="text" onChange={handleInputChange} name="firstname" placeholder="First Name" />
                    <input type="text" onChange={handleInputChange} name="cnicNo" placeholder="CNIC No" />
                    <input type="text" onChange={handleInputChange} name="pecNo" placeholder="PEC No" />
                    <input type="email" onChange={handleInputChange} name="email" placeholder="Email" />
                    <input type="text" onChange={handleInputChange} name="presentAddress" placeholder="Present Address" />
                    <input type="text" onChange={handleInputChange} name="province" placeholder="Province" />
                </div>
                <div className="col-md-6 col-sm-12 p-0">
                    <p className="checbox-label mt-4">Do you own property on your name</p>
                    <div className="checkboxes">
                        <input type="radio" name="ownProperty" onChange={handleInputChange} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="ownProperty" onChange={handleInputChange} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div>
                    <p className="checbox-label">Do you live in rental house?</p>
                    <div className="checkboxes">
                        <input type="radio" name="rentalHouse" onChange={handleInputChange} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="rentalHouse" onChange={handleInputChange} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div>
                    <p className="checbox-label">Are you agreed to use plot for residential purpose?</p>
                    <div className="checkboxes">
                        <input type="radio" name="residential" onChange={handleInputChange} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="residential" onChange={handleInputChange} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div>
                    <p className="checbox-label">Do you own property on your name</p>
                    <div className="checkboxes">
                        <input type="radio" name="ownProperty2" onChange={handleInputChange} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="ownProperty2" onChange={handleInputChange} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div>
                    <p className="checbox-label">Are you registered in FBR as Filer?</p>
                    <div className="checkboxes">
                        <input type="radio" name="fbrFiler" onChange={handleInputChange} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="fbrFiler" onChange={handleInputChange} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div>
                </div>
                <div className="submit-section mt-5">
                    <div className="d-flex" style={{ alignItems: "baseline" }}>
                        <input type="checkbox" onChange={handleInputChange} name="agreement" className="mr-3" />
                        <label> I hereby declare that I am patriotic Pakistani Citizen and being an engineer
                            to serve for Nation building with honesty.</label>
                    </div>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </div>

        </div>

        {/* <!-- Footer --> */}
        <Footer />
    </div>
}

export default RegistrationComponent;
