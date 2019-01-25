//ALL OF THE ROUTING

import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './HomePage';
import ChemicalPage from './ChemicalPage';
import InventoryPage from './InventoryPage';


class App extends Component {
    constructor() {
        super()
        this.state = {
            inventory: [],
        };
        this.addToInventory = this.addToInventory.bind(this);
    }


    addToInventory({ result }) {
       this.setState({
            inventory: this.state.inventory.concat({ result })
        });
        console.log('inventory: ', this.state);
    }
   
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    {/* to show details of 1 chemical */}
                    {/* <Route path='/chemical/:id' component={ChemicalDetailsPage}/> */}
                    <Route path='/chemical' render={(props) => <ChemicalPage {...props} addToInventory={this.addToInventory} />}
                    />
                    <Route path='/inventory' render={(props)=> <InventoryPage inventory={this.state.inventory} />} />
                    <Redirect to='/' />
                </Switch>
            </div>
        );
    }
}

export default App;