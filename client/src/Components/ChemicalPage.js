//PAGE = SEARCH BY CHEMICAL NAME

//search for chemcial by name and return list of matches
//click to add to inventory
//button to HomePage
//button to Inventory

import React from 'react';
// import { Component } from 'react';
import SearchBar from './SearchBar';
import { Button} from 'reactstrap';
import { Link } from 'react-router-dom';


const ChemicalPage = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         chemicalName: '',
    //         storageCategory: '',
    //     };
    // }

    // render() {
    return (
        <div>
            <h1>Search by Chemical Name</h1>
            <SearchBar />
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
// }

export default ChemicalPage