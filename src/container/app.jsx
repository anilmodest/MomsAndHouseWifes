import React, {Component} from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { AppBar, IconButton, RaisedButton , Drawer, FlatButton} from 'material-ui'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Divider from 'material-ui/Divider'
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';


import SignIn from '../components/SignIn.jsx'

injectTapEventPlugin();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
    palette: {
        textColor: cyan500,
    },
    appBar: {
        height: 50,
    },
});

const style = {
    margin: 10
};



export function signInDialogState()
{
    "use strict";
    return  {
        type : 'SignInAction'
    }
}



// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
class App extends Component {
    constructor(props){
        super(props)
        this.state = {
                      open: false}
    }

    handleClick() {
        this.handleToggle()
    }

    handleToggle () {
        this.setState({open: !this.state.open})}

    handleClose() { this.setState({open: false})}

    handleOpen() {
        this.props.signInDialogState()
    }


    render () {
        return (

            <MuiThemeProvider muiTheme={muiTheme}>
                <div>


                    <div>
                        <AppBar title={
                            <LinkContainer to="/">
                                <p>Beautiful World <sub>@ powered by housewives</sub></p>
                            </LinkContainer>} onLeftIconButtonTouchTap={this.handleToggle.bind(this)}>
                            <LinkContainer to="shareit">
                                <RaisedButton label="Share It!" style={style} />
                            </LinkContainer>
                            <RaisedButton label="About" style={style} />
                            <SignIn/>
                        </AppBar>
                        <div>

                            <Drawer openSecondary={false} open={this.state.open} >

                                <AppBar title="Menu" onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                                        iconElementLeft={<IconButton><NavigationClose /></IconButton>}/>

                                <LinkContainer to="arts">
                                    <RaisedButton label="Arts" fullWidth={true} onTouchTap={this.handleToggle.bind(this)}/>
                                </LinkContainer>
                                <Divider inset={true}/>
                                <LinkContainer to="clothes">
                                    <RaisedButton label="Cloth Designs" fullWidth={true}  onTouchTap={this.handleToggle.bind(this)}/>
                                </LinkContainer>
                                    <Divider/>
                                <LinkContainer to="photos">
                                    <RaisedButton label="Photos" fullWidth={true} onTouchTap={this.handleToggle.bind(this)} />
                                </LinkContainer>
                            </Drawer>
                        </div>
                    </div>

                    {this.props.children}
                    </div>
            </MuiThemeProvider>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signInDialogState
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(App)