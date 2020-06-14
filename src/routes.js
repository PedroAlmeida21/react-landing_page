import React from 'react';
import {Switch, Route} from 'react-router-dom';

//pages
import Home from './pages/home.js';
import Credits from './pages/credits.js';
import BMWM3 from './pages/bmw-m3.js';


const Routes = () => (
    <Switch>
        <Route exact path="/test" component={Home} />
        <Route exact path="/credits" component={Credits} />
        <Route exact path="/bmw-m3" component={BMWM3} />
    </Switch>
);

export default Routes;