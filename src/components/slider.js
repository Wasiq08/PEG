import React from "react";
import banner1 from '../imgs/banner1.jpg';
import banner2 from '../imgs/banner2.jpg';
import banner3 from '../imgs/banner3.jpg';


const Slider = () => {
    return (
        <React.Fragment>
            <div id="carouselExampleIndicators" className="border2px carousel slide" data-ride="carousel" style={{ width: "100%", margin: "auto" }}>
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={banner1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={banner2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={banner3} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </React.Fragment >
    )
}

export default Slider;
