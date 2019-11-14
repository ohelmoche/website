import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './components/Home';
import Horaire from './components/Horaire';
import QuestionAuRav from './components/QuestionAuRav'
import { MaQuestion }  from './components/QuestionAuRav'
import NousContacter from './components/NousContacter'
import BeitDin from './components/BeitDin'
import BerahaGdolim from './components/BerahaGdolim'
import Video from './components/Video'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

import NotFound from './components/Notfound'


function Routes() {
  return (
    <Switch>
      <Route exact path={'/'} component={(props) => <Home  {...props} />} />
      <Route exact path={'/Horaire'} component={(props) => <Horaire  {...props} />} />
      <Route exact path={'/question-au-rav'} component={(props) => <QuestionAuRav  {...props} />} />
      <Route exact path={'/question-au-rav/:id'} component={(props) => <MaQuestion  {...props} />} />
      <Route exact path={'/nous-contacter'} component={(props) => <NousContacter  {...props} />} />
      <Route exact path={'/beit-din'} component={(props) => <BeitDin  {...props} />} />
      <Route exact path={'/beraha-gdolim'} component={(props) => <BerahaGdolim  {...props} />} />
      <Route exact path={'/video'} component={(props) => <Video  {...props} />} />
      <Route exact path={'/log-in'} component={(props) => <SignIn  {...props} />} />
      <Route exact path={'/sign-up'} component={(props) => <SignUp  {...props} />} />
      <Route render={NotFound} />
    </Switch>
  );
}


export default Routes;
