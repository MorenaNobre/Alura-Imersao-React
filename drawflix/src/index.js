import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import {  Switch,  Route,  BrowserRouter } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video'

//desafio
const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route component={Pagina404} />
      {/* <Route component={() => (<div>Página 404</div>)} /> */}
    </Switch>
  </BrowserRouter>,

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);