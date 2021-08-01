import React, { useState } from "react";
import { firebase } from '../config/initFirebase';
import { useHistory } from "react-router-dom";

import NavBar from './nav';
import Header from './header';
import Footer from './footer';


const RegistrationComponent = () => {
    
    const history = useHistory();
    const [userDetails, setUserDetails] = useState({})
    const [isFormSubmitted, toggleFormSubmission] = useState(false)

    const handleInputChange = (e) => {
        const { name, value, checked } = e.target
        setUserDetails((prevState) => {
            return { ...prevState, [name]: name === "agreement" ? checked : value }
        })
    }


    const handleSubmit =  () => {
        try {
            
            console.log(userDetails);
            const db = firebase.database().ref('/registrations');
            const newRegistrationsRef = db.push();
            newRegistrationsRef.set(userDetails);
            // toggleFormSubmission(true);
            history.push('/submission');

            setTimeout(() => {
                setUserDetails({});
                toggleFormSubmission(false);
            }, 3000)
        } catch (error) {
            console.log("error>>>>> ", error.message);
            toggleFormSubmission(false);
        }
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
                    <input type="text" onChange={handleInputChange} value={userDetails.firstname || ""} name="firstname" placeholder="Name" />
                    <input type="text" onChange={handleInputChange} value={userDetails.cnicNo || ""} name="cnicNo" placeholder="CNIC No" />
                    <input type="text" onChange={handleInputChange} value={userDetails.mobileNumber || ""} name="mobileNumber" placeholder="Mobile Number" />
                    <input type="text" onChange={handleInputChange} value={userDetails.pecNo || ""} name="pecNo" placeholder="PEC No" />
                    <input type="email" onChange={handleInputChange} value={userDetails.email || ""} name="email" placeholder="Email" />
                    <input type="text" onChange={handleInputChange} value={userDetails.address || ""} name="address" placeholder="Address" />
                    <input type="text" onChange={handleInputChange} value={userDetails.city || ""} name="city" placeholder="City" />
                    <input type="text" onChange={handleInputChange} value={userDetails.province || ""} name="province" placeholder="Province" />
                </div>
                <div className="col-md-6 col-sm-12 p-0">
                    <p className="checbox-label mt-4">Do you have a job ?</p>
                    <div className="checkboxes">
                        <input type="radio" name="ownJob" onChange={handleInputChange} checked={userDetails.ownJob === "Yes"} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="ownJob" onChange={handleInputChange} checked={userDetails.ownJob === "No"} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div>
                    <p className="checbox-label">What is your current role ?</p>
                    <div className="checkboxes">
                        <input type="radio" name="currentRole" onChange={handleInputChange} checked={userDetails.currentRole === "fresh"} value={"fresh"} className="mr-1" /><label>Fresh</label>
                        <input type="radio" name="currentRole" onChange={handleInputChange} checked={userDetails.currentRole === "experience"} value={"experience"} className="ml-3 mr-1" /><label>Experienced</label>
                        <input type="radio" name="currentRole" onChange={handleInputChange} checked={userDetails.currentRole === "jobless"} value={"jobless"} className="mr-1" /><label>Jobless</label>
                        <input type="radio" name="currentRole" onChange={handleInputChange} checked={userDetails.currentRole === "job"} value={"job"} className="ml-3 mr-1" /><label>Job</label>
                    </div>

                    {/* <p className="checbox-label">Are you agreed to use plot for residential purpose?</p>
                    <div className="checkboxes">
                        <input type="radio" name="residential" onChange={handleInputChange} checked={userDetails.residential === "Yes"} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="residential" onChange={handleInputChange} checked={userDetails.residential === "No"} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div> */}
                    
                    {/* <p className="checbox-label">Do you own property on your name</p>
                    <div className="checkboxes">
                        <input type="radio" name="ownProperty2" onChange={handleInputChange} checked={userDetails.ownProperty2 === "Yes"} value={"Yes"} className="mr-1" /><label> Yes</label>
                        <input type="radio" name="ownProperty2" onChange={handleInputChange} checked={userDetails.ownProperty2 === "No"} value={"No"} className="ml-3 mr-1" /><label> No</label>
                    </div> */}
                    
                    <p className="checbox-label">Are you registered in PEC as ?</p>
                    <div className="checkboxes">
                        <input type="radio" name="registerdPec" onChange={handleInputChange} checked={userDetails.registerdPec === "register-engineer"} value={"register-engineer"} className="mr-1" /><label>Register Engineer</label>
                        <input type="radio" name="registerdPec" onChange={handleInputChange} checked={userDetails.registerdPec === "professional-engineer"} value={"professional-engineer"} className="ml-3 mr-1" /><label>Professional Engineer</label>
                        <input type="radio" name="registerdPec" onChange={handleInputChange} checked={userDetails.registerdPec === "not-yet"} value={"not-yet"} className="ml-3 mr-1" /><label>None</label>
                    </div>
                </div>
                <div className="submit-section mt-5">
                    <div className="d-flex" style={{ alignItems: "baseline" }}>
                        <input type="checkbox" onChange={handleInputChange} checked={userDetails.agreement === true} name="agreement" className="mr-3" />
                        <label> I hereby declare that I am patriotic Pakistani Citizen and being an engineer
                            to serve for Nation building with honesty.</label>
                    </div>
                    <button onClick={handleSubmit}>
                        Submit
                    </button>
                    {isFormSubmitted && <p className="text-center">Form has been submitted successfully</p>}
                </div>
            </div>

        </div>

        {/* <!-- Footer --> */}
        <Footer />
    </div>
}

export default RegistrationComponent;
