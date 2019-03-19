import React, { Component } from 'react';
import _ from "lodash";
import Icon from './Icon';

const InventoryCard = ({ category, deleteItem }) => {
    
    // (category[0]["Storage Category"] === "I") ? "green" : "white"
return (
    <div className="col-sm-3">
        <div className="card" key={category[0]["Storage Category"]} style={{ border: "3px solid #6c757d" }}>
        
            <div className="card-body" style={{ backgroundColor: (category[0]["Storage Category"] === "O") ? "blue" : "white" }}>
                <h5 className="card-title">{category[0]["Storage Category"]}</h5>
                <p className="card-text">{category[0]["Category Definitions"]}</p>
                <b><p className="card-text">{category[0]["Storage Cautions"]}</p></b>
                <Icon name={category[0]["Storage Category"]} />

            </div>

            <ul className="list-group list-group-flush" >
                {category.map((chem, i) =>
                    <li className="list-group-item" key={Math.random() * 5} style={{ color: "black", padding: "0.25rem 1rem" }}>
                        <button type="button" className="btn btn-secondary btn-sm" onClick={() => deleteItem(chem.Id)}>x</button>

                        {chem['Chemical Name']}

                    </li>
                )}
            </ul>
        </div>
    </div>


)
}


export default InventoryCard
