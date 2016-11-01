/**
 * Created by modestanil on 28/10/16.
 */
import React, {Component} from 'react'
import MainContent from './MainContent.jsx'
import MainContentLeft from './MainContentLeft.jsx'
import ThumbNails from './ThumbNails.jsx'
import { Grid, Col} from 'react-bootstrap'

class Main extends Component {
    constructor(props) {
        super(props)
    }


    render () {
        return (
            <div className="table">
                <div className="tr">
                        <span className="td menu">
                            <MainContentLeft/>
                        </span>
                        <span className="td">
                            <MainContent/>
                        </span>
                </div>
            </div>

        )
    }
}

export default Main
