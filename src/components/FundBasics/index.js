import React, {Fragment, useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {Grid, Paper} from '@material-ui/core';
import {withStyles} from "@material-ui/core/styles";
import styles from './styles';
import Axios from 'axios';

import fundBasics from '../../../public/data/fundBasicsJSON';

/*
* FundBasics Component
* */
const FundBasics = (props) => {
    const {classes} = props;
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const {fundsUrl} = props;
        if (response === null) {
            Axios.get(fundsUrl).then(function (res) {
                if (res.data.trim() === "") {
                    setResponse(fundBasics);
                } else {
                    setResponse(res);
                }
            }).catch(function (error) {
                setResponse(fundBasics);
                console.log(error);
            });
        }
    });

    return (
        <Grid container>
            <div className={classes.container}>
                <Grid item={12}>
                    <div className={classes.header}>FUND BASICS</div>
                    {response && response.date &&
                    <div className={classes.legal}>{`as of ${response.date}`}</div>
                    }
                </Grid>
                <hr/>
                <Grid container className={classes.table}>
                    {response && response.fundDetails && response.fundDetails.length > 0 &&
                    response.fundDetails.map((item, index) => (
                        <Fragment id={`fundBasic-${index}`}>
                            <Grid item xs={8} className={classes.title}>
                                {item.title}
                            </Grid>
                            <Grid item xs={4} className={classes.value}>
                                {`${item.isDollar ? '$' : ''}${item.value}${item.unit ? ` ${item.unit}` : ''}${item.postSymbol ? item.postSymbol : ''}`}
                            </Grid>
                        </Fragment>
                    ))
                    }
                </Grid>
                {response && response.legalText &&
                <Grid container>
                    <div className={classes.legal}>{response.legalText}</div>
                </Grid>
                }
            </div>
        </Grid>
    )
};

FundBasics.propTypes = {
    /** component style class */
    classes: PropTypes.object,
    /** Fund header */
    header: PropTypes.string.isRequired,
    /** Fund description */
    description: PropTypes.string,
    /** Fund content */
    content: PropTypes.string.isRequired,
};

export default withStyles(styles)(FundBasics);
