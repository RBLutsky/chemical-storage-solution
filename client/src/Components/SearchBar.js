import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: "" };


    }

    render() {
        return (
            <div className="search-bar">
                <input
                    //To update, we need to bind the value of the input to our term
                    value={this.state.searchTerm}

                    onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }
    // we want to update the term each time the input changes
    onInputChange(searchTerm) {
        this.setState({ term });
        // console.log(this.state);
        // invoke props.onSearchTermChange and pass in the term every time the input changes
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;