import React, { Component } from 'react';
import Menu from './header';
import { withRouter } from 'react-router';

// --> Criado para obter location.pathname em header, passandos os props da MenuParent
//      hooks não tem acesso a history, location...
class MenuParent extends Component {
  render() {
    return <Menu {...this.props} />;
  }
}

export default withRouter(MenuParent);
