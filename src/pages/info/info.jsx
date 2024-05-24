import React from 'react';
import './info.css'
import photo from "../../images/photo.jpeg"

export const Info = () => {
  
  return (
    <>
        <div className="info-container">
            <div className="social-medias">
                <div className="social-media">
                    <a href="https://www.instagram.com/diiilyoka?igsh=Z3I2cDdxcjZtYTNr&utm_source=qr" className="social-media-link" rel='noopener noreferrer' target='_blank'>Instagram</a>
                </div>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/%D0%B4%D0%B8%D0%BB%D1%8C%D0%BD%D0%B0%D0%B7-%D1%8E%D1%81%D1%83%D0%BF%D0%BE%D0%B2%D0%B0-a23962307/" className="social-media-link" rel='noopener noreferrer' target='_blank'>Linkedin</a>
                </div>
                <div className="social-media">
                    <a href="https://www.behance.net/bd0ca445" className="social-media-link" rel='noopener noreferrer' target='_blank'>Behance</a>
                </div>
            </div>
            <div className="info-image">
                <img src={photo} alt="" className="photo" />
            </div>
            <div className="info">
                <div className="info-text">
                    <div className="start">
                        <span className="span">Dilnaz Nurlanovna</span> is a versatile and talented developer and designer based in Kazakhstan, with expertise in both 
                        front-end and back-end development, as well as graphic design. Her comprehensive skill set allows her to handle 
                        various aspects of software development and visual design, making her a valuable asset in the tech industry.
                    </div>
                    <div className="education">
                        <span className="span">Education:</span>
                        <div className="uni">
                            <span className="span">Narxoz University</span>
                            <ul className="uni-ul">
                                <li>
                                    Degree: Bachelor of Information Technology
                                </li>
                                <li>
                                    Details: At Narxoz University, Dilnaz received a solid foundation in information technology, 
                                    gaining knowledge in computer science principles, software development, and system analysis. 
                                    Her education here equipped her with the technical skills necessary for her career in both development 
                                    and design.
                                </li>
                            </ul>
                        </div>
                        <div className="bit">
                            <span className="span">BitLab</span>
                            <ul className="bit-ul">
                                <li>
                                    Program: Java Development
                                </li>
                                <li>
                                Details: Dilnaz further honed her programming skills at BitLab, where she specialized in Java development. 
                                This program provided her with in-depth knowledge of Java programming, software engineering practices, 
                                and project management, enabling her to tackle complex back-end development projects with confidence.

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
