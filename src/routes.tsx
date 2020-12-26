import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';
import PageContato from './pages/PageContato';
import PageSobre from './pages/PageSobre';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={PageHome} />
        <Route path="/contato" component={PageContato} />
        <Route path="/sobre" component={PageSobre} />
        </BrowserRouter>
    );
};

export default Routes;