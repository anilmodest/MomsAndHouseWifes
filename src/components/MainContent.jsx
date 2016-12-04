/**
 * Created by modestanil on 29/10/16.
 */

import React, {Component} from 'react'

import { Media, Grid, Row, Col,Carousel } from 'react-bootstrap'
import { AppBar, IconButton, MenuItem, IconMenu, FontIcon, FlatButton, RaisedButton, DropDownMenu , Drawer} from 'material-ui'
import ActionHome from 'material-ui/svg-icons/action/home';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText, Chip, Avatar} from 'material-ui';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import HorizontalPane from './HorizontalPane.jsx'
import ProcessExplanation from './ProcessExplanation.jsx'
import ProfileDialog from './ProfileDialog.jsx'
import Contributors from './Contributors.jsx'

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

export function selectArtist(id, name)
{
    "use strict";
    return  {
        type : 'selectedArtist',
        selectedArtist: {id: id, name: name}
    }
}

class MainContent extends Component{
    constructor(props) {
        super(props)
        this.state ={
            profilepic: '../../img/meandyou.jpg',
            artists: [{'id': 1, 'artist': 'Deepa Redu', 'profilepic':'../../img/lonely.jpg'},{'id': 2, 'artist': 'Deepa Redu', 'profilepic':'../../img/lonely.jpg'}]

        }
    }

    render() {
        return ( <div className="container">
            <ProcessExplanation/>
            <Card>
                <CardTitle title="Show us your art" subtitle="This is for everyone who want to share their experience!"/>
                <CardText>
                    Platform is to promote the creativity of <strong>housewifes</strong> which poses immense talent but didn't found adequate platform.<br/>
                    Please join and upload your work / creativity and inspire your fellow one's. Meet few of the master artists
                </CardText>
                <div style={styles.wrapper}>
                    {this.state.artists.map((artist, i) => {

                        return (
                            <ProfileDialog artist={artist}/>)
                    })}

                </div>
                <CardHeader
                    title={"Pick of the week" + <strong> this.state.selectedImage.author</strong>}
                    subtitle={<p><strong>Rediscover your lost art</strong>
                        <br/>Your talent worth millions please share it </p>}
                    avatar={this.state.profilepic}
                />
                <CardMedia
                    overlay={<CardTitle title="" subtitle={this.props.selectedImage.title} />} className="cardMedia">

                    <img height={550} width={600} alt="900x500" src={this.props.selectedImage.img}/>

                </CardMedia>

                <CardActions>
                    <HorizontalPane/>
                </CardActions>
            </Card>
        </div>)
    }
}

MainContent.defaultProps = {
    selectedImage: {'img':'./../img/beautyhavenolimits.jpg', 'title':'beauty have no limits', 'author':'Deepa Redu'}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectArtist
    }, dispatch)
}

function mapStateToProps(state) {
    "use strict";
    if(state.selectedImage.selectedImage.img === '') {
        return {}
    }
    return { selectedImage: state.selectedImage.selectedImage}
}

export default connect(mapStateToProps, mapDispatchToProps) (MainContent)
