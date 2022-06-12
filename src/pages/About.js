import { fromUnixTime } from 'date-fns';
import React, { Component } from 'react';
import "./About.css";
import profile_pic_name from '../assets/profile_pic_name.JPG';
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              alt=".profile_pic" className="profile_image" src={profile_pic_name}
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title"><b>Danny Joseph</b></div>
            <div className="brief_description">
              <p><b>From:</b> Naples, Florida</p>
              <p><b>School:</b> Florida Gulf Coast University</p>
              <p><b>Bio:</b> Born and raised in Southwest Florida, I've been blessed to be
              surrounded by beaches and sunshine. I am the youngest of three sons and have always
              had a passion centered around technology. I enjoy watching movies, sports and music 
              (specifically 80's pop and R&B of any time period). </p>
              <p><b>Hobbies:</b> Boxing, Weight Lifting, Cinematography, Video Editing, Drawing, Writing, Gaming.</p>
              <p><b>Fun Fact:</b> I won a talent show when I was 9 years old by performing 
              "Billie Jean" by Michael Jackson lol.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}