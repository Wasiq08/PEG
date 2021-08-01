import React from "react";
import NavBar from './nav';
import Slider from './slider';
import Header from './header';
import Footer from './footer';
import { Link } from "react-router-dom";
import banner from '../imgs/pec_banner.jpg';
import ReactPlayer from 'react-player'

const DashboardComponent = () => {
    return <div>
        <NavBar />
        <Header />
        <div>
            <Slider />
            <div className="card-container">
                <div className="db-banner">
                    <img className="card-img-top" src={banner} alt="Card cap" />
                </div>


                <div className="card mx-0" >
                    <Link to="/registration">
                        <button>Apply Now</button>
                        {/* <img className="card-img-top" src={card1} alt="Card cap" /> */}
                    </Link>
                </div>

                <div className="row db-video">

                    <div className='player-wrapper'>
                        <ReactPlayer
                            url='https://fb.watch/76oKeAuGmb/'
                            className='react-player'
                            playing
                            width='100%'
                            height='100%'
                        />
                    </div>
                </div>
            </div>
        </div >

        {/* <!-- Footer --> */}
        < Footer />

    </div >
}

export default DashboardComponent;
