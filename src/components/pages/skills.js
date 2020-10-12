import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Skills extends Component{
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <h4>
                        {this.props.beginPercentage} - {this.props.endPercentage} 
                    </h4>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>
                        {this.props.skill}
                    </h4>     
                </Cell>
            </Grid>
        );
    };
}

export default Skills;