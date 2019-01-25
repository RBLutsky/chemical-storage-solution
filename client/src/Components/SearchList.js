import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';


const SearchList = (props) => {
       // console.log('searchList props: ', props.searchResults.map(result));
    // const searchResults = props.searchResults;
    console.log(props)
    return (
        <ul>
            {props.searchResults.map((result, id) =>
                <li key={id}>
                    <h4>{result['Chemical Name']} {result['Storage Category']}</h4>
                </li>
            )}
        </ul>

        // <ListGroup>
        //     <ListGroupItem>Cras justo odio</ListGroupItem>
        //     <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        //     <ListGroupItem>Morbi leo risus</ListGroupItem>
        //     <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
        //     <ListGroupItem>Vestibulum at eros</ListGroupItem>
        // </ListGroup>
    )
}

ListGroup.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // boolean to render list group items edge-to-edge in a parent container
    flush: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
}

export default SearchList