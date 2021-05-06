import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import User from './core/User';
import Technicien from './core/Technicien';
import Admin from './core/Admin';
import Signin from './user/signin';
import Signup from './user/signup';
import Menu from './core/Menu'

function Routes() {
    return (
        <div>
            <BrowserRouter>
            <Menu />
                <Switch>
                    <Route path= '/Technicien' exact component={Technicien} />
                    <Route path= '/User' exact component={User} />
                    <Route path= '/Admin' exact component={Admin} />
                    <Route path= '/signin' exact component={Signin} />
                    <Route path= '/signup' exact component={Signup}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    )
}

export default Routes