import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StorePicker } from "./StorePicker"
import { App } from "./App"
import { NotFound } from "./NotFound"
import React from 'react'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StorePicker}/>
            <Route exact path="/store/:storeId" component={App}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export { Router };