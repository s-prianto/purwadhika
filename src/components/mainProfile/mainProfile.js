import React, { Component } from 'react'
import './mainProfile.sass'

export default class mainProfile extends Component {
    render() {
        return (
            <div class = "container-mainprofile">
                <img src="https://pbs.twimg.com/profile_banners/27260086/1600402032/600x200" alt="" />
                <div className="profile-picture">
                    <img src="https://pbs.twimg.com/profile_images/1306798942831607809/8DkhUF6x_400x400.jpg" alt="" srcset=""/>
                </div>


                <div className="buttons">
                    <button className="option">Option</button>
                    <button className="follow">follow</button>
                </div>
            </div>
        )
    }
}
