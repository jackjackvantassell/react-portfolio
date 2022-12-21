import React from 'react'
import Picture from '../../../static/assets/images/auth/login.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
    return (
        <div className="content-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + Picture + ") no-repeat",
                    backgroundSize: "cover",
                    groundPosition: "center",
                }}
            />

            <div className="contacts">
                <div className="bullet-group">
                <div className="icon">
                    <FontAwesomeIcon icon="phone" /> 
                </div>
                <div className="text">unavailable</div>
                </div>

                <div className="bullet-group">
                <div className="icon">
                    <FontAwesomeIcon icon="envelope" /> 
                </div>
                <div className="text">jackjackvantassell@gmail.com</div>
                </div>

                <div className="bullet-group">
                <div className="icon">
                    <FontAwesomeIcon icon="map-marked-alt" /> 
                </div>
                <div className="text">USA</div>
                </div>
            </div>

        </div>
    )
}