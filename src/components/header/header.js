import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import './header.sass'

export default class header extends Component {
    render() {
        return (
            <div className="container">
                <FontAwesomeIcon icon={faArrowLeft} className="font-awesome"/>
                <div className="title">
                    <h4>Justin Bieber
                        
                    <FontAwesomeIcon icon={faCheckCircle} className="font-awesome"/>
                    </h4>
                    <p>31K Tweets</p>
                </div>
            </div>
        )
    }
}
