import React, { Component} from 'react'
import {Grid, Cell} from 'react-mdl';

class ResumePage extends Component{
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>Left Side</Cell>
                    <Cell className="right-col" col={8}>Right Side</Cell>
                </Grid>
            </div>
        )
    }
}

export default ResumePage;
