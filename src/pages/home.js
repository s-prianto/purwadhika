import React, { Component } from 'react';
import './home.sass';
import Header from '../components/header/header.js';
import MainProfile from '../components/mainProfile/mainProfile';

export default class home extends Component {
    // constructor(){
    //     super()

    //     this.state = {

    //     }
    // }


    render() {
        return (
            <div className="container">
                <div className="left">
                    Left
                </div> 
                <div className="middle">
                    <Header/>
                    <MainProfile/>
                </div>
                <div className="right">
                    Right
                </div>
            </div>
            

        )
    }
}
