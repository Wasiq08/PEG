import React from 'react'
import ReactPlayer from 'react-player'
import NavBar from './nav'
import Header from './header'
import Footer from './footer'
import icon from '../imgs/icon.PNG';
import ReactTypingEffect from 'react-typing-effect';


const Submission = () => {
    return (
        <>
            <NavBar />
            <Header />
            <p className="th-message">Thanks For  Registration</p>
            <div className="icon">
                <img src={icon} alt="ProfilePic" className="profilepic"></img>
            </div>
            <div className="txt-effect">
                <ReactTypingEffect className="typingeffect" text={['#Vote For Waseem Nazeer', 'Vote for Change']} speed={50} eraseDelay={700} />
            </div>

            <p className="txt-message">Dont forget to cast your vote on 8th August 2021 </p>
            <p className="txt-message">#Vote4WaseemNazir</p>
            <div className='player-wrapper'>
                <ReactPlayer
                    url='https://fb.watch/76tCqcO7bB/'
                    className='react-player'
                    playing
                    width='100%'
                    height='100%'
                />
            </div>
            <Footer />
        </>
    )
}

export default Submission;