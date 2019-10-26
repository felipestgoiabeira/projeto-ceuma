import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import Menu from './components/MenuParent';
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />

        <div className="ui container">
          <Routes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
