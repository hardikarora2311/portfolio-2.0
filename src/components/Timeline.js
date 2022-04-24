import React from 'react'
import {MdBusinessCenter, MdDesignServices} from "react-icons/md"
import {FaQuestion} from "react-icons/fa"
import {HiSpeakerphone} from "react-icons/hi"
import {VscFeedback} from "react-icons/vsc"



const Timeline = () => {
  return (
    <div className="timeline">
        <div className="container">
            <div className="content">
                <div className="icon">
                    <svg width="0" height="0">
                        <linearGradient id="gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#f3ec78" offset="0%" />
                            <stop stopColor="#af4261" offset="100%" />
                        </linearGradient>
                    </svg>
                    <MdBusinessCenter style={{ fill: "url(#gradient)" }}/>
                </div>
                <div className="timeline-text">
                    <h3>Business</h3>
                    <p>I need to have an in-depth idea of what you exactly do.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <div className="icon">
                    <FaQuestion style={{ fill: "url(#gradient)" }}/>
                </div>
                <div className="timeline-text">
                    <h3>Whys</h3>
                    <p>“Whys” will help me to get a better understanding of your problem.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <div className="icon">
                    <HiSpeakerphone style={{ fill: "url(#gradient)" }}/>
                </div>
                <div className="timeline-text">
                    <h3>CTAs</h3>
                    <p>Getting the target audience do what you want through Call To Actions.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <div className="icon">
                    <MdDesignServices style={{ fill: "url(#gradient)" }}/>
                </div>
                <div className="timeline-text">
                    <h3>Design</h3>
                    <p>The overall design of website should be consistent & irresistible.</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="content">
                <div className="icon">
                    <VscFeedback style={{ fill: "url(#gradient)" }}/>
                </div>
                <div className="timeline-text">
                    <h3>Feedback</h3>
                    <p>Review & let me know if there are any colors and features to avoid.</p>
                </div>
            </div>
        </div>
  </div>
  )
}

export default Timeline