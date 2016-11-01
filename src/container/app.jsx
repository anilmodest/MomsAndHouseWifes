/**
 * Created by modestanil on 26/10/16.
 */
import React, { Component } from 'React'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
import { MenuSelector } from '../reducers/MenuSelector.js'


import Main from '../components/main.jsx'
import Menu from '../components/menu.jsx'

const rootReducer = combineReducers({
    tabSelector: MenuSelector
})


let store = createStore(rootReducer)

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        return (
            <Provider store={store}>
                <div >
                    <Menu/>
                    <Main/>
                </div>
            </Provider>

        )
    }
}


export default App
