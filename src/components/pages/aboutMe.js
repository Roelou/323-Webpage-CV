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
                                 src ="/images/IMG_20201012_212535.jpg"
                                 alt="avatar"
                                 style={{height:'500px'}}
                            />
                        </div>
                        <h1 style={{paddingTop: '1em', textAlign: 'center',paddingBottom: '1em', color: 'goldenrod', fontSize: '70px'}}>Roelou Dirk van der Merwe</h1>
                        <h3 style={{color: 'grey', textAlign: 'center',paddingBottom: '1em', fontSize: '50px'}}>Full Stack Programmer</h3>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <p style={{paddingTop: '1em',paddingBottom: '1em', paddingLeft: '4em', paddingRight: '4em', textAlign: 'center'}}>
                            Hello there! I am a up-incoming full stack developer, I'm a 3rd year university student with great skills in managing a business and with multiple life skills that 
                            would be great to have in any business. I may not have much experience, but I'm more than confident that my creativeness will bridge that gap and I am great with working with other people.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'100%'}}/>
                        <h4 style={{paddingTop: '2em', paddingLeft: '2em', fontSize: '25px'}}>Address</h4>
                        <p style={{paddingLeft: '2em', fontSize: '25px'}}>45 Bokmakierie ln Cashan 5</p>
                        <h4 style={{paddingTop: '2em', paddingLeft: '2em', fontSize: '25px'}}>Phone Number</h4>
                        <p style={{paddingLeft: '2em', fontSize: '25px'}}>(071) 612 4253 </p>
                        <h4 style={{paddingTop: '2em', paddingLeft: '2em', fontSize: '25px'}}>Email</h4>
                        <p style={{paddingLeft: '2em',paddingBottom: '1em', fontSize: '25px'}}>Roeloudvdm@outlook.com</p>

                    </Cell>

                    <Cell className="right-column" col={8}>
                        <h1 style={{paddingBottom: '1em', color: 'lightcoral'}}>EDUCATION</h1>

                        <Education
                            startYear={2013}
                            endYear={2017}
                            schoolName="Rustenburg High School"
                            schoolDiscription="Rustenburg High is one of the top secondary institutions in the city, complete with a full academic,
                             sport and cultural divisions that we pride ourselves in. Our school has continuously produced some of the smartest academic achievers in the country
                             as well as some of the best sport players that ended up in major national and international sports clubs. The subject that I majored in are: physics, higher classed mathmatics, EGD and biology, 
                             I also was part of the 1st hockey team as a defender through grade 8-10."
                        />
                        <Education
                            startYear={2018}
                            endYear={2020}
                            schoolName="Potchefstroom University" 
                            schoolDiscription="Pukke is one of the best 'if' not THE best University in the country that has lead to countless successful students graduating 
                            and leading successful lives in the business world. I studied for 4 years and got my BSc degree."
                        />
                        <hr style={{borderTop: '3px solid #fff'}}/>

                        <h1 style={{paddingBottom: '1em', color: 'lightcoral'}}>EXPERIENCE</h1>

                        <WorkExperience
                            startYear={2017}
                            endYear={2017}
                            workName="Rustenburg Engine Center"
                            workDiscription="I worked on engines and many other industrial machines at this garage. I have learned alot in the few months that I was there, about complex metal structures 
                            , engineering designs as well as how to code and operate a state of the art CNC machine as well as daily management roles 
                            and the complex inner-workings of mine management (The garage has contracts with Anglo American). "
                        />
                        <WorkExperience
                            startYear={2019}
                            endYear={2019}
                            workName="PC Works"
                            workDiscription="I worked for 3 months at this computer repair shop and in that time I learned alot about how to operate, reapair and build old and new computers as well as how to install 
                            different kinds of software, and how to manage such a store. "
                        />
                        
                        <hr style={{borderTop: '3px solid #fff'}}/>
                        <h1 style={{paddingBottom: '1em', color: 'lightcoral'}}>SKILLS</h1>

                        <Skills beginPercentage="70%" endPercentage="80%" skill="Javascript"/>
                        <Skills beginPercentage="50%" endPercentage="60%" skill="Java"/>
                        <Skills beginPercentage="85%" endPercentage="90%" skill="C++"/>
                        <Skills beginPercentage="95%" endPercentage="100%" skill="C#"/>
                        <Skills beginPercentage="60%" endPercentage="70%" skill="Python"/>
                        <Skills beginPercentage="75%" endPercentage="80%" skill="HTML"/>
                        <Skills beginPercentage="75%" endPercentage="80%" skill="CSS"/>
                        
                        <hr style={{borderTop: '3px solid #fff'}}/>
                        <h1 style={{paddingBottom: '1em', color: 'lightcoral'}}>HOBBIES & TALENTS</h1>

                        <Hobbies hobby="Motorcross" hobbyDesc="I started riding motorbike at a young age and I qualified for
                            multiple compititions and had multiple sponsers and gained alot of knowlegde on how the compititions sre set up and managed."/>
                        <Hobbies hobby="Fishing" hobbyDesc="It's the hobby that I have had for the longest time, if we started to talk about fishing I would never stop....."/>
                        <Hobbies hobby="Diver" hobbyDesc="Im am a licenced Advanced Rescue diver. In my family vacation time we would go diving for recreational purposes, but after a few years
                        I grew quite fond of diving and decided to start doing professional lessons for more specialized dives and gear and I'm close to getting my diving instructors licence."/>
                        <Hobbies hobby="Fist aid responder" hobbyDesc="Im a licenced first aid responder and I'm currently busy with my paramedic licence."/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default aboutMe

