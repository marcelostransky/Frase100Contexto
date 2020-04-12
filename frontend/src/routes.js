import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Logon from './Pages/Logon';
import Register from './Pages/Registro';
import Frases from './Pages/Frases';
import Frase from './Pages/NovaFrase';

export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact component={Logon}></Route>
            <Route path='/registro' component={Register}></Route>
            <Route path='/frases' exact component={Frases}></Route>
            <Route path='/frases/nova' component={Frase}></Route>
        </Switch>
    </BrowserRouter>
    )
}