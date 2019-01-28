//ALL OF THE ROUTING

import { Switch, Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import HomePage from './HomePage';
import ChemicalPage from './ChemicalPage';
import InventoryPage from './InventoryPage';
import chemicalStorage from '../data/chemicalStorage';
import _ from 'lodash';

class App extends Component {
    constructor() {
        super()
        this.state = {
            inventory: [],
            categories: chemicalStorage,
            inventoryByCategory: []
        };
        this.addToInventory = this.addToInventory.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentDidMount() {
        this.hydrateStateWithLocalStorage();

        // add event listener to save state to localStorage
        // when user leaves/refreshes the page
        window.addEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveStateToLocalStorage.bind(this)
        );

        // saves if component has a chance to unmount
        this.saveStateToLocalStorage();
    }

    hydrateStateWithLocalStorage() {
        // for all items in state
        for (let key in this.state) {
            // if the key exists in localStorage
            if (localStorage.hasOwnProperty(key)) {
                // get the key's value from localStorage
                let value = localStorage.getItem(key);

                // parse the localStorage string and setState
                try {
                    value = JSON.parse(value);
                    this.setState({ [key]: value });
                } catch (e) {
                    // handle empty string
                    this.setState({ [key]: value });
                }
            }
        }
    }

    saveStateToLocalStorage() {
        // for every item in React state
        for (let key in this.state) {
            // save to localStorage
            localStorage.setItem(key, JSON.stringify(this.state[key]));
        }
    }

    updateInput(key, value) {
        // update react state
        this.setState({ [key]: value });
    }

    //localStorage only takes strings as values (key, value)
    addToInventory(result) {

        //copy current inventory
        const inventory = [...this.state.inventory];
        //add result to inventory and update state
        this.setState({ inventory: inventory.concat(result) });

        //sort inventory in to storage categories
        const chemicalsByCategory = _
            .chain(inventory)
            .groupBy("Storage Category")
            .sortBy(["Chemical Name"])
            .value();
        console.log('chemicalsByCategory:' ,chemicalsByCategory);

        this.setState({ inventoryByCategory: chemicalsByCategory});
        console.log('inventoryByCategory: ', this.state.inventoryByCategory)



    }


    deleteItem(chemID) {
        // copy current inventory
        const inventory = [...this.state.inventory];

        // filter out the item being deleted
        const updatedInventory = inventory.filter(item => item.Id !== chemID);

        this.setState({ inventory: updatedInventory });

    }


    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    {/* to show details of 1 chemical */}
                    {/* <Route path='/chemical/:id' component={ChemicalDetailsPage}/> */}

                    {/* <Route path='/category' component={Category} /> */}

                    <Route path='/chemical' render={(props) => <ChemicalPage {...props} addToInventory={this.addToInventory} />}
                    />
                    <Route path='/inventory' render={(props) => <InventoryPage {...props}
                        deleteItem={this.deleteItem}
                        categories={this.state.categories}
                        inventoryByCategory={this.state.inventoryByCategory} />} />
                        
                    <Redirect to='/' />


                </Switch>
            </div>
        );
    }
}

export default App;