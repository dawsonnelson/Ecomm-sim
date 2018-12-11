import React from 'react'
import { Route, Switch} from 'react-router-dom'
import Main from './Componenets/Main/Main'
import Cart from './Componenets/Cart/Cart'

export default(

    <Switch>
        <Route exact path = '/' component={Main}/>
        <Route path = '/Cart' component={Cart}/>
    </Switch>
)