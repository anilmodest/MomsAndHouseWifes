/**
 * Created by modestanil on 22/11/16.
 */

import React, {Component} from 'react'
import {GridList, IconButton, GridTile} from 'material-ui';
import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';

import {connect} from 'react-redux'

import Contributors from './Contributors.jsx'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        margin:20
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};


class Arts extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    filter(item) {
        if(this.props.filter === -1 || this.props.filter === item.artistId) {
            return true
        }
        return false
    }


    render () {
        return (
            <div>
                <Contributors/>

                <div style={styles.root}>
                    <GridList style={styles.gridList} cols={2.4}>
                        {this.props.photos.filter(this.filter.bind(this)).map((photo) => (
                            photo.pics.map((tile, i) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                actionIcon={
                                    <div>
                                                <span className="likeDislike">{tile.like}</span>
                                                <IconButton><ThumbsUp /></IconButton>
                                                <span className="likeDislike">{tile.dislike}</span>
                                                <IconButton><ThumbsDown /></IconButton>
                                    </div>
                                }
                                style={styles.titleStyle}
                                titleBackground="li-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                            >
                                <img height={300} width={300} src={tile.img} />
                            </GridTile>
                        ))))}
                    </GridList>
                </div>
            </div>
        );
    }
}

Arts.defaultProps = {
    photos:[{artistId:1, pics:[{title:'Cutie', img:'../../img/cutie.jpg', like:1, dislike:2}, {title:'Feeding food', img:'../../img/feeding.jpg', like:11, dislike:2}]},
             {artistId:2, pics:[{title:'Rajasthani Folk Singer', img:'../../img/folksinger.jpg', like:4, dislike:1}, {title:'Gurella', img:'../../img/gurella.jpg', like:14, dislike:4},
             {title:'My Niece', img:'../../img/niece.jpg', like:9, dislike:5}, {title:'Long way to go', img:'../../img/meandyou.jpg', like:7, dislike:0}]}],
    filter: -1
}

function mapStateToProps(state) {
    "use strict";
    debugger
    return { filter: state.selectedFilter.id}
}

export default connect(mapStateToProps, null)(Arts)

