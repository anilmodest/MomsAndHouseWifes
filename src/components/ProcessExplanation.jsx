import React, {Component} from 'react';
import {
    Step,
    Stepper,
    StepLabel,
    StepContent,
    Toggle,
    RaisedButton,
    FlatButton
} from 'material-ui';

const styles = {
    chip: {
        margin: 10
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap'
    },block: {
        margin:5
    },
    toggle: {
        marginBottom: 16,
    },
    thumbOff: {
        backgroundColor: '#ffcccc',
    },
    trackOff: {
        backgroundColor: '#ff9d9d',
    },
    thumbSwitched: {
        backgroundColor: 'red',
    },
    trackSwitched: {
        backgroundColor: '#ff9d9d',
    },
    labelStyle: {
        color: 'red',
    },
};


class ProcessExplanation extends Component {
    constructor() {
        super()
        this.state = {
            finished: false,
            stepIndex: 0,
            showSteps:false
        }
    }

    handleNext() {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2,
        });
    };

    handlePrev() {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };

    handleShowHide() {
        this.setState({showSteps:!this.state.showSteps})
    }

    renderStepActions(step) {
        const {stepIndex} = this.state;

        return (
            <div style={{margin: '12px 0'}}>
                <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onTouchTap={this.handleNext.bind(this)}
                    style={{marginRight: 12}}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disabled={stepIndex === 0}
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onTouchTap={this.handlePrev.bind(this)}
                    />
                )}
            </div>
        );
    }

    render() {
        const {finished, stepIndex} = this.state;

        return (
            <div style={styles.block}>
                <Toggle
                    label="Checkout how it work"
                    labelPosition="right"
                    style={styles.toggle}
                    defaultToggled={this.state.showSteps}
                    onToggle={this.handleShowHide.bind(this)}
                />
                {this.state.showSteps ?
                <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
                    <Stepper activeStep={stepIndex} orientation="vertical">
                        <Step>
                            <StepLabel>Upload your work under proper category</StepLabel>
                            <StepContent>
                                <p>
                                    For each work you do please upload it. Select proper category
                                    under upload section and mark it with proper details e.g. multiple
                                    images, author details, about work, location etc.
                                </p>
                                {this.renderStepActions(0)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>Share it</StepLabel>
                            <StepContent>
                                <p>Mark it to share with people and gather likes.</p>
                                {this.renderStepActions(1)}
                            </StepContent>
                        </Step>
                        <Step>
                            <StepLabel>People rate and purchase it</StepLabel>
                            <StepContent>
                                <p>
                                    Finally based on multiple factors and your work you will get appreciation and price.
                                </p>
                                {this.renderStepActions(2)}
                            </StepContent>
                        </Step>
                    </Stepper>
                    {finished && (
                        <p style={{margin: '20px 0', textAlign: 'center'}}>
                            <a
                                href="#"
                                onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}
                            >
                                Click here
                            </a> to reset.
                        </p>
                    )}
                </div> :
                    <span></span>}
            </div>
        );
    }
}

export default ProcessExplanation;