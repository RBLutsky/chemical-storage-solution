import React, { Component } from 'react';


class SearchList extends Component {
        
    render() {
       
        return (
            <div className="list-group">
                <ul className="list-group">
                    <p>Search Results:  Click to add to Inventory.</p>
                    {this.props.searchResults.map((result) =>
                        <li className="list-group-item" key={result.Id} >
                            <h4>
                                <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.addToInventory(result)}>+</button>

                                {result['Chemical Name']} {result['Storage Category']}
                            </h4>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}


export default SearchList