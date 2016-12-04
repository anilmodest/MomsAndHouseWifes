/**
 * Created by modestanil on 28/10/16.
 */
import React, {Component} from 'react'
import MainContent from './MainContent.jsx'

class Home extends Component {
    constructor(props) {
        super(props)
    }


    render () {
        return (
            <div className="table" >
                <div className="tr">
                    <span className="td">
                            <MainContent/>
                    </span>
                </div>
            </div>

        )
    }
}

export default Home
