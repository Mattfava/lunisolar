import React, { Component } from 'react'
import Fadein from 'react-fade-in';



class Landing extends Component {
    render() {
        return (
            <Fadein transitionDuration="2000" delay = "2000">
                {/* //add different fonts and colors */}
                <h1 font ="alternate gothic">Lunisolar</h1>
                <h2>Musician Artist Something else</h2>
                <button>Enter</button>
            </Fadein>
        )
    }


}
export default Landing;