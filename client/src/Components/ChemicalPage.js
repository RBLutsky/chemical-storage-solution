//PAGE = SEARCH BY CHEMICAL NAME
//includes: 
//search for chemcial by name -> SearchBar.js
//return list of matches
//click to add to inventory


import React from 'react';
import { Component } from 'react';
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
                return chem;
            } else {
                return
                // alert('No such chemical found');
                //  WONT GO AWAY WHEN CLICK OK
            }
        });
        this.setState({ searchResults: results }, function () {
            // console.log(this.state);
        })
        // console.log('RESULTS ARE', results)
    }

    // onClearArray = ()=> {
    //     this.setState({searchResults:[]})
    // }


    render() {
        return (
            <div>
                <h1>Search by Chemical Name</h1>

                {/* set new prop/value(function) to pass to SearchBar */}
                <SearchBar chemicalSearch={this.chemicalSearch} />
                <br />
                <Link to='/'>
                    <button type="button" class="btn btn-secondary">Home</button>
                </Link>

                <Link to='/inventory'>
                    <button type="button" class="btn btn-secondary">View Inventory</button>
                </Link>

                <SearchList searchResults={this.state.searchResults} addToInventory={this.props.addToInventory} />


            </div>
        )

    }
}

export default ChemicalPage