/**
 * Created by modestanil on 6/11/16.
 */
import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {IconButton, Subheader} from 'material-ui';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    picRef: {
        display:'block',

    }
};

const tilesData = [
    {
        img: '../../img/folkdance.jpg',
        title: 'Folk Dance',
        author: 'deepa',
    },
    {
        img: '../../img/folksinger.jpg',
        title: 'Rajasthani Singer',
        author: 'deepa',
    },
    {
        img: '../../img/fullpackedjourney.jpg',
        title: 'Overloaded Bus',
        author: 'deepa',
    },
    {
        img: '../../img/lonely.jpg',
        title: 'Lonely',
        author: 'deepa',
    },
    {
        img: '../../img/beautyhavenolimits.jpg',
        title: 'Beauty',
        author: 'deepa',
    },
    {
        img: '../../img/rajasthaniflight.jpg',
        title: 'Camel',
        author: 'deepa',
    },
    {
        img: '../../img/gurella.jpg',
        title: 'Gurella',
        author: 'deepa',
    },
    {
        img: '../../img/endlessdriving.jpg',
        title: 'Endless Driving',
        author: 'deepa',
    },
    {
        img: '../../img/niece.jpg',
        title: 'My Niece',
        author: 'deepa',
    },
    {
        img: '../../img/feelingdull.jpg',
        title: 'Feeling Dull',
        author: 'deepa',
    },
    {
        img: '../../img/cutie.jpg',
        title: 'Cutie',
        author: 'deepa',
    }

];


class HorizontalPane extends Component{
    constructor() {
        super()
        this.state = {isInitializing:true};
    }

    handleSelectedImage(e, index) {
        if(e != null) {
            e.preventDefault()
            this.props.selectPicture(index);
        }
    }

    render() {
        return (
            <div style={styles.root}>
                <Subheader>Few works by artist: <strong>Deepa</strong></Subheader>
                <GridList style={styles.gridList} cols={2.2}>
                    {tilesData.map((tile, i) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>} >
                            <a className="picRef" href="" onClick={(e) => this.handleSelectedImage(e, i)} >
                                <img  height={200} width={200} src={tile.img}/>
                            </a>
                        </GridTile>
                    ))}
                </GridList>
            </div>
        )
    }
}

export function selectPicture(index)
{
    "use strict";
    return  {
        type : 'picSelectionChange',
        imageDetail: tilesData[index]
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        selectPicture
    }, dispatch)
}


export default connect(null, mapDispatchToProps)(HorizontalPane);