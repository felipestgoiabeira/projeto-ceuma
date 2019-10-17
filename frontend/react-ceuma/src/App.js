import React from 'react';
import './App.css';
import Routes from './routes';
import Menu from './components/header'
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <div className="App">
     <Menu />

      <div className="ui container">

        <Routes />

      </div>

    </div>

  );
}

export default App;
