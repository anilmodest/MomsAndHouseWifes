/**
 * Created by modestanil on 2/11/16.
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'



import App from './container/app.jsx';
import Home from './components/Home.jsx'
import ShareIt from './components/ShareIt.jsx'


import SignInReducer from './reducers/SignInSelector.js'



const store = createStore(
    combineReducers({
        routing: routerReducer,
        signInDialogState: SignInReducer
    })
)

const historyRedux = syncHistoryWithStore(browserHistory, store)

class Index extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <Router history={historyRedux}>
                    <Route path="/" component={App}>
                        <IndexRoute component={Home} />
                        <Route path="/shareit" component={ShareIt}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}




export default Index


