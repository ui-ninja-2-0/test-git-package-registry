import React, {Fragment, useEffect, useState} from 'react';
import * as PropTypes from 'prop-types';
import {Grid, withStyles} from "@material-ui/core";
import Axios from 'axios';

import YieldStyles from './styles';
import yieldData from "../../../public/data/yieldJSON";


const Yield = (props) => {
    const {classes} = props;
    const [yieldContent, setYieldData] = useState(null);

    useEffect(() => {
        const {yieldUrl} = props;
        if (yieldContent === null) {
            Axios.get(yieldUrl).then(function (res) {
                if (res.data.trim() === "") {
                    setYieldData(yieldData);
                } else {
                    setYieldData(res);
                }
            }).catch(function (error) {
                setYieldData(yieldData);
                console.log(error);
            });
        }
    });

    return (
        <Grid container>
            <div className={classes.container}>
                {yieldContent &&
                <Grid item={12}>
                    {yieldContent.title &&
                    <div className={classes.header}>
                        {yieldContent.title}
                    </div>
                    }
                    {yieldContent.date &&
                    <div className={classes.dateText}>
                        {`as of ${yieldContent.date}`}
                    </div>
                    }
                </Grid>
                }
                <hr />
                <Grid container>
                    {yieldContent && yieldContent.yieldDetails && yieldContent.yieldDetails.length > 0 &&
                    yieldContent.yieldDetails.map((item, index) => (
                        <Fragment id={`yield-${index}`}>
                            <Grid item xs={6} className={classes.title}>
                                {item.title}
                            </Grid>
                            <Grid item xs={6} className={classes.value}>
                                {`${item.value}%`}
                            </Grid>
                        </Fragment>
                    ))
                    }
                </Grid>
                {yieldContent && yieldContent.legalText &&
                <Grid container>
                    <div className={classes.legal}>{yieldContent.legalText}</div>
                </Grid>
                }
            </div>
        </Grid>
    )
};

Yield.propTypes = {
    /** Yield component css classes*/
    classes: PropTypes.object,
};

export default withStyles(YieldStyles)(Yield);

