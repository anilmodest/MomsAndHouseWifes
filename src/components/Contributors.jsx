/**
 * Created by modestanil on 24/11/16.
 */

import React, {Component} from 'react'
import {List, ListItem, Avatar, FlatButton} from 'material-ui';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import Store from 'material-ui/svg-icons/action/store';


export function filterPictures(id)
{
    "use strict";
    return {
        type:'filter',
        artistId: id
    }
}


class Contributors extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleSelection(id) {
        this.props.filterPictures(id);
    }

    render() {
        return (
            <div className="floatLeft">
                <List >
                    <ListItem
                        disabled={false}
                        onTouchTap={(e) => this.handleSelection(-1).bind(this)}>
                        <Store className="storeStyle"/>
                    </ListItem>
                        {
                            this.props.contribs.map((item) => {
                                return (
                                    <ListItem
                                        disabled={false}
                                        leftAvatar={<Avatar size={40} src={item.profilePic} />} onTouchTap={(e) => this.handleSelection(item.id).bind(this)}>
                                        {item.name}
                                    </ListItem>
                                )
                            })
                        }
                </List>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        filterPictures
    }, dispatch)
}

Contributors.defaultProps = {
    contribs : [{id:1, name:'Deepa', profilePic: '../../img/lonely.jpg'}, {id:2, name:'Deepa Redu', profilePic: '../../img/lonely.jpg'}]
}

export default connect(null, mapDispatchToProps) (Contributors)