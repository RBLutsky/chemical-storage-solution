import React, { Component } from 'react';
import { Button } from 'reactstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }
    // grab the term each time the input changes
    onChange(e) {
        this.setState({ searchTerm: e.target.value });
        this.props.onSearchTermChange(this.searchTerm);
       
    }

    //go get the data - should be getting in Chemical page?
    onClick(e) {
        alert("A chemical was submitted: " + this.state.searchTerm);
        e.preventDefault();
    }

    render() {
        return (
            <div className="search-bar" >
                <input
                    //To update, we need to bind the value of the input to our term
                    type='search'
                    value={this.state.searchTerm}
                    name='q'
                    placeholder="chemical name"
                    onChange={this.onChange}
                    
                />
                <span> 
                    <Button type='submit' onClick={this.onClick}color="primary">Search</Button>
                </span>
            </div>
        );
    }

}

export default SearchBar;