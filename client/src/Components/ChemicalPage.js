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
import SearchList from './SearchList';

class ChemicalPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
        this.chemicalSearch = this.chemicalSearch.bind(this);
        // this.onClearArray=this.onClearArray.bind(this);
    }

    //search for a chemical
    chemicalSearch(searchTerm) {
        let results = chemicalNames.filter(chem => {
            if (chem['Chemical Name'].toLowerCase().includes(searchTerm.toLowerCase())) {
                return results;
                // this.setState({searchResults: [...this.state.searchResults, chem]})
            } else {
                return alert('No such chemical found');
            }
        });
        console.log('RESULTS ARE', results)
        console.log('state is: ', this.setState.searchResults)
     }

    
    // onClearArray = ()=> {
    //     this.setState({searchResults:[]})
    // }


    render() {
        return (
            <div>
                <h1>Search by Chemical Name</h1>

                {/* set new prop/value(function) to pass to SearchBar */}
                <SearchBar chemicalSearch={this.chemicalSearch} onClearArray={this.onClearArray}/>

                <SearchList searchResults={this.state.searchResults}/>

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