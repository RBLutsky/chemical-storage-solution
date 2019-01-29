import React, { Component } from 'react';
import _ from "lodash";

class InventoryCard extends Component {
    

    render() {
        let storageCode = this.props.category[0]["Storage Category"];
        switch(storageCode) {
            case 'Gas':
                
        }



        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                        <div className="card text-white bg-info mb-3 " style={{ border: "3px solid #6c757d" }} key={this.props.category[0]["Storage Category"]} >
                            <div className="card-body" >
                                <div className="card-header" style={{ textAlign: "center" }}>
                                    <h3>{this.props.category[0]["Storage Category"]}</h3>
                                </div >

                                <p className="card-text text-center">
                                    {this.props.category[0]["Category Definitions"]}
                                </p>
                                <b> <h4 className="card-text text-center" style={{ color: "#d25a05"}}>{this.props.category[0]["Storage Cautions"]}
                                </h4></b>
                            </div>


                            <ul className="list-group list-group-flush" >
                                {this.props.category.map((chem, i) =>
                                    <li className="list-group-item" key={chem.Id + i} style={{ color: "black", padding: "0.25rem 1rem" }}>
                                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => this.props.deleteItem(chem.Id+i)}>x</button>

                                        {chem['Chemical Name']}

                                    </li>
                                )}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default InventoryCard