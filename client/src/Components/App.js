import {Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
}

render() {
    return(
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
            </Switch>
        </div>
    )
}

export default App