import {isAuthenticated} from '../services/auth';
import React from 'react';
import {Route, Redirect} from 'react-router-dom';
export default function PrivateRoute  ({ component: Component, ...rest })  {
    return(<Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
            
          <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
        )
      }
    />);
    }
  