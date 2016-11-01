/**
 * Created by modestanil on 29/10/16.
 */

import React, {Component} from 'React'
import {Grid, Row, Col, Thumbnail, Button } from 'react-bootstrap'

class ThumbNails extends Component{
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col xs={1} md={3}>
                            <Thumbnail src="../../../img/bird-book.jpg" alt="242x200">
                                <h3>Thumbnail label</h3>
                                <p>
                                    <Button bsStyle="primary">Show</Button>&nbsp;
                                    <Button bsStyle="default">Share</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={1} md={3}>
                            <Thumbnail src="../../../img/bird-book.jpg" alt="242x200">
                                <h3>Thumbnail label</h3>
                                <p>
                                    <Button bsStyle="primary">Show</Button>&nbsp;
                                    <Button bsStyle="default">Share</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                        <Col xs={2} md={3}>
                            <Thumbnail src="../../../img/bird-book.jpg" alt="242x200">
                                <h3>Thumbnail label</h3>
                                <p>
                                    <Button bsStyle="primary">Show</Button>&nbsp;
                                    <Button bsStyle="default">Share</Button>
                                </p>
                            </Thumbnail>
                        </Col>
                    </Row>
                </Grid>
            </div>)
    }
}

export default ThumbNails
