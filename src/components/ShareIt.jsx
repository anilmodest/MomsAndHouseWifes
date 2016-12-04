/**
 * Created by modestanil on 3/11/16.
 */
import React, {Component} from 'react'
import { Grid, Row, Col, DropdownButton, Menu} from 'react-bootstrap'
import {Paper, Subheader, RadioButton, Card, RadioButtonGroup, SelectField, Divider, MenuItem, CardActions, CardHeader, TextField, CardText, Toggle, CardTitle, FlatButton, GridTile, IconButton} from 'material-ui'
import Dropzone from 'react-dropzone'
import StarBorder from 'material-ui/svg-icons/toggle/star-border'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import request from 'superagent'

const styles = {
    paper: {
        height: 180,
        width: 300,
        margin: 5,
        textAlign: 'center'
    },
    radioButton: {
        marginBottom: 16
    },
    toggle: {
    },
    block: {
        maxWidth: 250,
    },
    dropzone: {
        height:80,
        width: 160,
        margin:50,
    },
    radioButton: {
        marginBottom: 16,
    },
    radioButtonRight: {
        marginBottom: 16,
        float:'right'
    },
    radioGroup: {
        display: 'flex'
    },
    customWidth: {
        width: 150,
        height:0
    },
    categorySelect: {
        margin:20,
    },
    floatRight: {
        float:'right'
    }

};

class ShareIt extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadedImages: [],
            image: '#',
            selectedCategory: Object.keys(this.props.Category)[0]
        }

        this.imageDetails = []
    }

    onDrop(acceptedFiles) {
        this.uploadFile(acceptedFiles)
    }



    uploadFile(files) {
        files.map((file, i) => {
            var reader = new FileReader();
            reader.params = {file}
            reader.onload = function(e) {
                var pics = this.state.uploadedImages.slice();
                pics.push({preview: e.target.result, file: e.target.params.file, filename: e.target.params.file.name});
                this.setState({uploadedImages : pics});
            }.bind(this)
            reader.readAsDataURL(file);
        })
    }

    handleCategoryChange(event, index, value) {
        this.setState({selectedCategory: value})
    }

    updateImageDetails(e, filename, file) {
        var isRecordUpdated = false
        this.imageDetails.filter((item) => this.isRecordExists(item, filename)).map((item) => {
            item.title = e.target.value
            isRecordUpdated = true
        })
        if(isRecordUpdated === false) {
            this.imageDetails.push({filename: filename, file: file, title: e.target.value})
        }
    }

    isRecordExists(item, filename) {
        if(filename === item.filename) {
            return true
        }
        return false
    }

    uploadToServer(e) {
        debugger
        e.preventDefault();
        this.imageDetails.map((item) => {
            let upload = request.post('http://localhost:8081/upload')
                .field('upload_preset', 'test_id')
                .field('name', item.filename)
                .field('title', item.title)
                .field('file', item.file);

            upload.end((err, response) => {
                if(err) {
                    console.error(err);
                    return
                }
                if(response['image_url'] !==  '') {
                    this.setState( {uploadedImages: response['image_url']})
                }
            })
        })
    }




    render () {
        return (
            <div className="container">
                <Card>
                    <CardHeader
                        title="URL Avatar"
                        avatar="../../img/lonely.jpg" className="shareItAvatar"
                    />
                    <CardTitle title="Please upload your creativity" subtitle="" />
                    <CardActions>
                        <div>
                            <Grid >
                                <Row className="show-grid">
                                    <Col xs={8} md={2}>
                                        <p className="categorySelect">Select Category: </p>
                                        <SelectField
                                            value={this.state.selectedCategory}
                                            onChange={this.handleCategoryChange.bind(this)}
                                            autoWidth={true} floatingLabelStyle={{color: 'red'}} style={styles.customWidth} >
                                            {
                                                Object.keys(this.props.Category).map((key, i) =>
                                                    <MenuItem value={key} primaryText={this.props.Category[key]} />
                                                )
                                            }
                                        </SelectField>
                                    </Col>
                                </Row>
                                <br/>
                                <Row className="show-grid">
                                        <Col xs={4} md={2}>
                                            <RadioButtonGroup name="ImageUpload" defaultSelected="Image" style={styles.radioGroup}>
                                            <RadioButton
                                                value="Image"
                                                label="Image"
                                                style={styles.radioButton}
                                            />

                                                <RadioButton
                                                    value="video"
                                                    label="Video"
                                                    style={styles.radioButtonRight}
                                                />
                                            </RadioButtonGroup>
                                        </Col>
                                </Row>
                                <Row className="show-grid">
                                  <Col xs={6} md={4}>
                                      <Dropzone onDrop={this.onDrop.bind(this)} multuple={true} accept="image/*" className="dropZone">
                                          <p className="dropImageText"><strong>Please drop your files here.</strong></p>
                                      </Dropzone>
                                  </Col>
                                </Row>
                                <Row className="show-grid">

                                        <div className="imagePreview">
                                            {

                                                this.state.uploadedImages.length > 0? this.state.uploadedImages.map((img) => (
                                                    <div>
                                                        <Paper style={styles.paper} zDepth={2} >
                                                            <img width={300} height={180} src={img.preview} />
                                                        </Paper>
                                                        <TextField hintText="Title" onChange={(e)=>this.updateImageDetails(e, img.filename, img.file)}/>
                                                    </div>
                                            )): ''}
                                            </div>
                                </Row>
                            </Grid>
                            <br/>
                            <br/>
                            <Divider />
                                <FlatButton label="Submit" onTouchTap={this.uploadToServer.bind(this)}/>
                        </div>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

ShareIt.defaultProps = {
author: 'Deepa Redu',
Category: { art: 'Art', designing: 'Designing', photo: 'Photos'}

}

export default ShareIt