import React, { Component } from 'react';


class SearchList extends Component {

    handleClick = (result, e) => {
        if (e.target.innerText === "+") {
            this.props.addToInventory(result)
            e.target.innerText = '√'
        } else {
            e.target.innerText = "+"
        }
    }
    render() {

        return (
            <div className="list-group">
                <ul className="list-group">
                    <b> <p style={{ color: "#03688d" }}>Search Results:  Click to add to Inventory.</p></b>
                    {this.props.searchResults.map((result) =>
                        <li className="list-group-item" key={result.Id} >
                            <h4>
                                <button type="button" className="btn plus btn-secondary btn-sm" onClick={(e) => this.handleClick(result, e)}>+</button>

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