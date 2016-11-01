import React, { Component } from 'react'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import { Jumbotron, Button, Navbar, Nav, NavDropdown, MenuItem, NavItem, Media, FormGroup, FormControl} from 'react-bootstrap'
import Search from 'react-search'



class Menu extends Component {
    constructor(props) {
        super(props)
    }

    searchInCategories(items){

    }


    render () {
        let items = [
            { id: 0, value: 'ruby' },
            { id: 1, value: 'javascript' },
            { id: 2, value: 'lua' },
            { id: 3, value: 'go' },
            { id: 4, value: 'julia' }
        ]
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a >Beautiful World <sup>@ powered by housewives</sup></a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>


                        <Nav pullRight>
                            <NavDropdown eventKey={3} title="Category" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Arts</MenuItem>
                                <MenuItem eventßKey={3.2}>Clothes</MenuItem>
                                <MenuItem eventKey={3.3}>Photos</MenuItem>
                                <MenuItem divider />
                                <MenuItem eventKey={3.3}>Share Your Work</MenuItem>
                            </NavDropdown>
                            <NavItem eventKey={1} href="#">Share It!</NavItem>
                            <NavItem eventKey={1} href="#">Sign In</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                </div>
        )
    }
}

export default Menu