import React, { Component } from 'react';


class SearchList extends Component {
    state = {
        plus: true
   }
    
   handleClick = (result)=>{
        this.props.addToInventory(result)
        this.setState({plus: !this.state.plus})
    }
    render() {
       
        return (
            <div className="list-group">
                <ul className="list-group">
                    <b> <p style={{ color: "#03688d" }}>Search Results:  Click to add to Inventory.</p></b>
                    {this.props.searchResults.map((result) =>
                        <li className="list-group-item" key={result.Id} >
                            <h4>
                                <button type="button" className="btn plus btn-secondary btn-sm" onClick={() => this.handleClick(result)}>{this.state.plus ? '+' : <img src="https://icon.now.sh/check"/>}</button>

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