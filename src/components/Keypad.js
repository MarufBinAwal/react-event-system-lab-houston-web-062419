// Code Keypad Component Here
import React, { Component } from 'react'

export default class Keypad extends Component {

    onKeyUp = (e) => {
        console.log('Entering password...')
        }
    render() {
        return (
            <div>
                <input onKeyUp={(e) => this.onKeyUp(e)} type="password" />
            </div>
        )
    }
}

