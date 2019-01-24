//ALL OF THE ROUTING

import { Switch, Route, Redirect } from 'react-router-dom';
import React,{ Component } from 'react';
import HomePage from './HomePage';
import ChemicalPage from './ChemicalPage';
import InventoryPage from './InventoryPage';
import ChemicalDetailsPage from './ChemicalDetailsPage';

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {};
    // }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    {/* to show details of 1 chemical */}
                    {/* <Route path='/chemical/:id' component={ChemicalDetailsPage}/> */}
                    <Route path='/chemical' component={ChemicalPage}/>
                    <Route path='/inventory' component={InventoryPage}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        );
    }
}

export default App;