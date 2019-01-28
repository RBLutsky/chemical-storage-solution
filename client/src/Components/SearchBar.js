import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    
    onClick(e) {
        e.preventDefault();
        this.props.chemicalSearch(this.state.searchTerm);
        // this.props.onClearArray();
    }

    // grab the term each time the input changes
    onChange(e) {
        this.setState({ searchTerm: e.target.value });
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
                    <button type="submit" className="btn btn-secondary" onClick={this.onClick} >Search</button>

                </span>
            </div>
        );
    }

}

export default SearchBar;