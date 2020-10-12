import { render } from '@testing-library/react';
import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Hobbies extends Component{
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <h4>
                        {this.props.hobby}
                    </h4>
                </Cell>
                <Cell col={8}>
                    <p style={{marginTop: '0px'}}>
                        {this.props.hobbyDesc}
                    </p>     
                </Cell>
            </Grid>
        );
    };
}

export default Hobbies;