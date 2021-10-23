import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Grid, Step, StepLabel, Stepper, Typography } from '@material-ui/core';

import React, { useState } from 'react';
import * as yup from 'yup'
import './InnovationThree.css'
import Gcash from './../../assets/gcash.png'
import Paypal from './../../assets/paypal.png'
import Multistepform from './MultiStep/Multistepform';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    stepper:{
        margin: "auto",
    },
    form1: {
        width: 700,
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px",
    },
    form2: {

    },
    typo: {
        marginBottom: "30px",
        fontSize: "17px"
    },
    text_input: {
        display: "inline-block",
        width: "200px",
    },
    in_input: {
        lineHeight: "2em",
        width: "22em",
        marginBottom: "16px",
        fontSize: "20px"
    },
    inButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default function InnovationThree() {
    const classes = useStyles();
    return (
        <div className = {classes.root}>
            <Grid container>
                <Grid item xs={5}>
                    <div className = "in3_1">
                        <h2>INVEST</h2>
                        <img src="primevandal.jpg"/>
                        <h3>Prime Vandal</h3>
                        <p>Innovator/s: Zach Betos</p>
                        <p>Description: It has a laser magazine and a 25 bullet count.</p>
                        <span>Status: Proposed</span>
                    </div>
                </Grid>
                
                <Grid item xs={7} >
                    <Card>
                        <CardContent>
                           <Multistepform/>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
