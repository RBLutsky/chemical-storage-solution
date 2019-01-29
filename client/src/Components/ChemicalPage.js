//PAGE = SEARCH BY CHEMICAL NAME
//includes: 
//search for chemcial by name -> SearchBar.js
//return list of matches
//click to add to inventory


import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import fullList from '../data/fullList';
import SearchList from './SearchList';

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
        let results = fullList.filter(chem => {
            if (chem['Chemical Name'].toLowerCase().includes(searchTerm.toLowerCase())) {
                return chem;
            } else {
                return
                // alert('No such chemical found');
                //  WONT GO AWAY WHEN CLICK OK
            }
        });
        this.setState({ searchResults: results }, function () {
           
        })
           }

    
    render() {
        return (
            <div> 
                <div className="search" style={{ border: "3px solid  #03688d", textAlign:"center"}}>
                    <h1>Search by Chemical Name</h1>

                    {/* set new prop/value(function) to pass to SearchBar */}
                    <SearchBar chemicalSearch={this.chemicalSearch} />
                  
                </div>

                <SearchList searchResults={this.state.searchResults} addToInventory={this.props.addToInventory} />


            </div>
        )

    }
}

export default ChemicalPage