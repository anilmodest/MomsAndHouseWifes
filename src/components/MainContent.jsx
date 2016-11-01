/**
 * Created by modestanil on 29/10/16.
 */

import React, {Component} from 'react'
import { Media } from 'react-bootstrap'

class MainContent extends Component{
    constructor(props) {
        super(props)
    }


    render() {
        return ( <div>
            <Media>
                <Media.Left>
                    <img width={200} height={200} src="../../../img/bird-book.jpg" alt="Image"/>
                </Media.Left>
                <Media.Body>
                    <Media.Heading>Nested Media Heading</Media.Heading>
                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
                </Media.Body>
            </Media>
        </div>)
    }
}

export default MainContent
