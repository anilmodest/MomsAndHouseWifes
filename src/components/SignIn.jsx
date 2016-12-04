/**
 * Created by modestanil on 6/11/16.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { OverlayTrigger,Popover } from 'react-bootstrap'

import {Subheader, Dialog, TextField, FlatButton, RaisedButton} from 'material-ui';

const customContentStyle = {
    width: '30%',
    maxWidth: 'none',
};

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    handleOpen() {
        this.setState({open: true});
    };


    handleClose() {
        this.setState({open: false});
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose.bind(this)}
            />,
        ];



        return (
            <div className="signIn">
                <RaisedButton label="Sign In" onTouchTap={this.handleOpen.bind(this)} />
                <Dialog
                    title="Please enter details"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={this.handleClose.bind(this) }
                    contentStyle={customContentStyle}>
                    <div>
                        <TextField
                            hintText="Enter User Name"
                        />
                        <br/>
                        <TextField
                            hintText="Password"
                        />
                        <br/>
                        </div>
                </Dialog>
            </div>

        );
    }
}



export default SignIn