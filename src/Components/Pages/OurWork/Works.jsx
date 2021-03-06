import React from 'react';
import {Tabs,TabList,Tab,TabPanel} from 'react-tabs'
import { works1, works2,works3, works4, works5 } from './data';
import Panel from './Panel';
import './Styles/Works.scss';

function Works(){
    return(
        <div className="our-works">
            <h1>Our Work </h1>
            <div className="tabs">
                <Tabs>
                    <TabList>
                        <Tab>All Designs</Tab>
                        <Tab>Animation</Tab>
                        <Tab>Brand Identity</Tab>
                        <Tab>Illustration</Tab>
                        <Tab>Web & App Design</Tab>
                        <Tab>Landing Page Design</Tab>
                    </TabList>
                    <TabPanel>
                      <Panel list={works1}/>
                    </TabPanel>
                    <TabPanel>
                      <Panel list={works2}/>
                    </TabPanel>
                    <TabPanel>
                      <Panel list={works3}/>
                    </TabPanel>
                    <TabPanel>
                      <Panel list={works1}/>
                    </TabPanel>
                    <TabPanel>
                      <Panel list={works4}/>
                    </TabPanel>
                    <TabPanel>
                      <Panel list={works5}/>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    )
};
export default Works;