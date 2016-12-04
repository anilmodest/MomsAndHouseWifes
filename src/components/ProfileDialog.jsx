import React, {Component} from 'react'


import {Dialog, FlatButton, Chip, Avatar} from 'material-ui'
import {connect} from 'react-redux'

const styles = {
    chip: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
};

class ProfileDialog extends Component {

    constructor(props) {
        super(props)
        this.state = {
                open: false,
        }
    }

    handleOpen() {
        this.setState({open: true});
    }

    handleClose() {
        this.setState({open: false});
    }
    
    render() {
            let actions = [     <FlatButton 
                                label="Cancel" 
                                primary={true} 
                                onTouchTap={this.handleClose.bind(this)}     />, 
                                <FlatButton 
                                 label="Submit" 
                                 primary={true} 
                                 onTouchTap={this.handleClose.bind(this)}     />];
        return (
                <div>
                    <Chip onTouchTap={this.handleOpen.bind(this)}
                          style={styles.chip}>
                        <Avatar src={this.props.artist.profilepic} />
                        {this.props.artist.artist}
                    </Chip>
                    <Dialog 
                          title="Dialog With Actions" 
                          actions={actions} 
                          modal={true} 
                          open={this.state.open} > 
                    </Dialog>
                </div>
            )


    }
}

ProfileDialog.defaultProps = {
  artist: {'id': 1, 'artist': 'Deepa Redu', 'profilepic':'../../img/lonely.jpg'}
}

export default ProfileDialog