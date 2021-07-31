import React from "react";


const Footer = () => {
    return <React.Fragment>
        {/* <!-- Footer --> */}
        <footer className="bg_green color_white page-footer font-small indigo">
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* <!-- Grid row--> */}
                <div className="row d-flex text-center justify-content-center mb-md-0 mb-4">
                    {/* <!-- Grid column --> */}
                    <div>
                        <p style={{ lineHeight: "1.7rem", padding: 10 }}>
                            Karachi Headquarter <br />
                            Dolmen Estate 1st Floor 18-C,<br />
                            Block 7-8 Union Commercial Area Shaheed-e-Millat Road, Karachi<br />
                            Phone: 021-34380518
                        </p>
                    </div>
                </div>
                {/* <!-- Grid row--> */}
                <hr style={{ border: "white 1px solid", width: '100%' }} />
                {/* <!-- Copyright --> */}
                <div style={{ display: 'flex', justifyContent: "space-between", width: '100%' }}>
                    <p>Copyright © 2021</p>
                    <p>Powered by Professional Excellence Group. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
        {/* <!-- Footer --> */}
    </React.Fragment>
}

export default Footer;
