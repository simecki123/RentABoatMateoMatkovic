import React from 'react';
import profilePic from '../assets/MatinLogo.jpg';
import './AboutUsStyle.css'; // Import CSS for AboutUsComponent
import { useTranslation } from 'react-i18next';

function AboutUsComponent() {
    const { t } = useTranslation();
    return (
        <div className="about-us-container">
            <div className="about-us-content">
                <div className="profile-picture-container">
                    <img className="profile-picture" src={profilePic} alt='profile-picture' />
                </div>
                <div className="text-container">
                    <h2 className='about-us-title'>{t("meetOurTeam")}</h2>
                    <p className='about-us-text'>
                        {t("aboutUsText")}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;
