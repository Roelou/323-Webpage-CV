import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Skills extends Component{
    render(){
        return (
            <Grid>
                <Cell col={8}>
                    <h3 style={{marginTop: '0px', color: 'cyan'}}>
                        {this.props.skill}
                    </h3>     
                </Cell>
                <Cell col={4}>
                    <h4 style={{paddingBottom: '1em', color: 'chartreuse'}}>
                        {this.props.beginPercentage} - {this.props.endPercentage} 
                    </h4>
                </Cell>
            </Grid>
        );
    };
}

export default Skills;