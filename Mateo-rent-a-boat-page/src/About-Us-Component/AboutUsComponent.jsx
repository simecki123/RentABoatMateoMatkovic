import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import './AboutUsStyle.css'; // Import CSS for AboutUsComponent

function AboutUsComponent() {
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="profile-picture-container">
                    <img className="profile-picture" src={profilePic} alt='profile-picture' />
                </div>
                <div className="text-container">
                    <h2 className='about-us-title'>Meet Our Team</h2>
                    <p className='about-us-text'>
                        We are a team of passionate individuals dedicated to delivering innovative solutions.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
                        Proin ullamcorper, velit id tincidunt ultrices, ligula eros ultricies risus, non consequat justo metus ac turpis.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;
