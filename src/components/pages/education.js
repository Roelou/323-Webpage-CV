import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Education extends Component{
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{paddingBottom: '0.2em', color: 'chartreuse'}}>
                        {this.props.startYear} - {this.props.endYear} 
                    </p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px',paddingBottom: '0.5em', color: 'blueviolet'}}>
                        {this.props.schoolName}
                    </h4>
                    <p style={{paddingBottom: '2em'}}>
                        {this.props.schoolDiscription}
                    </p>
                </Cell>
            </Grid>
        );
    };
   
}

export default Education;
