//PAGE = SEARCH BY CHEMICAL NAME
//includes: 
//search for chemcial by name -> SearchBar.js
//return list of matches
//click to add to inventory


import React from 'react';
import { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import chemicalNames from '../data/chemicalNames';

class ChemicalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
        this.chemicalSearch = this.chemicalSearch.bind(this);
    }

    //search for a chemical
    chemicalSearch(searchTerm) {
        console.log('chemicalSearch1:', searchTerm);
        // let results = chemicalNames.forEach(chemical => {
        //     if (searchTerm === chemical['Chemical Name']) {
        //         console.log('got em:', results);
        //     }
        // });
        let results = chemicalNames.filter(chem => {
            if (chem['Chemical Name'].toLowerCase().includes(searchTerm.toLowerCase())) {
                return chem;
            } else {
                return;
            }
        });
        console.log('RESULTS ARE', results)
    }



    render() {
        return (
            <div>
                <h1>Search by Chemical Name</h1>

                {/* set new prop/value(function) to pass to SearchBar */}
                <SearchBar chemicalSearch={this.chemicalSearch} />
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