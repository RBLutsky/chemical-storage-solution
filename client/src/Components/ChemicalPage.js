//PAGE = SEARCH BY CHEMICAL NAME
//includes: 
    //search for chemcial by name
    //return list of matches
    //click to add to inventory
//button to HomePage
//button to Inventory

import React from 'react';
import { Component } from 'react';
import SearchBar from './SearchBar';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class ChemicalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chemicals: [],
        };
        this.chemicalSearch = this.chemicalSearch.bind(this);
    }

    //search for a chemical
    chemicalSearch(searchTerm) {
        console.log('the chemicalPage:' ,searchTerm);

    }

    render() {
        return (
            <div>
                <h1>Search by Chemical Name</h1>

                {/* set new prop/value(function) to pass to SearchBar */}
                <SearchBar onSearchTermChange={this.chemicalSearch} />
                <Chemical-SearchList />
                <Link to='/'>
                    <Button color="primary">Home</Button>
                </Link>
                <Link to='/inventory'>
                    <Button color="primary">View Inventory</Button>
                </Link>
            </div>
        )

    }
}

    export default ChemicalPage