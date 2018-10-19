import React from 'react';
import { Route } from 'react-router-dom';

export default ({ component: C, props: componentProps, ...misc }) => (
    <Route {...misc} render={props => <C {...props} {...componentProps} />} />
);
