import React, { Component} from 'react'
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import WorkExperience from './workExperience';
import Skills from './skills';
import Hobbies from './hobbies';

class aboutMe extends Component{
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                 src ="/images/f5WiAE.jpg"
                                 alt="avatar"
                                 style={{height:'200px'}}
                            />
                        </div>
                        <h1 style={{paddingTop: '2em', textAlign: 'center',paddingBottom: '1em'}}>Roelou Dirk van der Merwe</h1>
                        <h3 style={{color: 'grey', textAlign: 'center',paddingBottom: '1em'}}>Full Stack Programmer</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <p style={{paddingTop: '1em',paddingBottom: '1em', paddingLeft: '4em', paddingRight: '4em', textAlign: 'center'}}>
                            Lorem Ipsum  t is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout. The point of
                            using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                            as opposed to using 'Content here, content here', making it look like readable English.
                            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default
                            model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                             Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <h4 style={{paddingTop: '2em', paddingLeft: '2em'}}>Address</h4>
                        <p style={{paddingLeft: '2em'}}>45 Bokmakierie ln Cashan 5</p>
                        <h4 style={{paddingTop: '2em', paddingLeft: '2em'}}>Phone Number</h4>
                        <p style={{paddingLeft: '2em'}}>(071) 612 4253 </p>
                        <h4 style={{paddingTop: '2em', paddingLeft: '2em'}}>Email</h4>
                        <p style={{paddingLeft: '2em',paddingBottom: '1em'}}>Roeloudvdm@outlook.com</p>

                    </Cell>

                    <Cell className="right-column" col={8}>
                        <h1>Eductaion</h1>


                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Rustenburg High School"
                            schoolDiscription="Rustenburg High is one of the top secondary institutions in the city, complete with a full academic,
                             sport and cultural divisions that we pride ourselves in. Our school has continuously produced some of the smartest academic achievers in the country
                             as well as some of the best sport players that ended up in major national and international sports clubs. The subject that I majored in are: physics, higher classed mathmatics, EGD and biology, 
                             I also was part of the 1st hockey team as a defender through grade 8-10"
                        />
                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="Potchefstroom University"
                            schoolDiscription="Pukke is one of the best 'if' not THE best University in the country that has lead to countless successful students graduating 
                            and leading successful lives in the business world. I studied for 4 year and got my BSc degree"
                        />
                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h1>Experience</h1>

                        <WorkExperience
                            startYear={2017}
                            endYear={2017}
                            workName="Rustenburg Engine Center"
                            workDiscription="I worked on engines and many other industrial machines at this garage. I have learned alot in the few months that I was there, about complex metal structures 
                            , engineering designs as well as how to code and operate a state of the art CNC machine as well as daily management roles 
                            and the complex inner-workings of mine management (The garage has contracts with Anglo American) "
                        />
                        <WorkExperience
                            startYear={2019}
                            endYear={2019}
                            workName="PC Works"
                            workDiscription="I worked on engines and many orther industrial machines"
                        />
                        
                        <hr style={{borderTop: '3px solid #fff'}}/>
                        <h1>Skills</h1>

                        <Skills beginPercentage="70%" endPercentage="80%" skill="Javascript"/>
                        <Skills beginPercentage="50%" endPercentage="60%" skill="Java"/>
                        <Skills beginPercentage="85%" endPercentage="90%" skill="C++"/>
                        <Skills beginPercentage="95%" endPercentage="100%" skill="C#"/>
                        <Skills beginPercentage="60%" endPercentage="70%" skill="Python"/>
                        <Skills beginPercentage="75%" endPercentage="80%" skill="HTML"/>
                        <Skills beginPercentage="75%" endPercentage="80%" skill="CSS"/>
                        
                        <hr style={{borderTop: '3px solid #fff'}}/>
                        <h1>Hobbies & Talents</h1>

                        <Hobbies hobby="Motorcross" hobbyDesc=""/>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default aboutMe

