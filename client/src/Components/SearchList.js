import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';
import PropTypes from 'prop-types';


class SearchList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        // this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        this.props.addToInventory(this.state.searchTerm);
        // this.props.onClearArray();
    }

    render() {
        return (
            <div className="listBox">
                <ListGroup>
                    {this.props.searchResults.map((result, id) =>
                        <ListGroupItem key={id}>
                            <h4><Button color="secondary" size='sm' onClick={this.onClick}>+ </Button>
                                {result['Chemical Name']} {result['Storage Category']}
                            </h4>
                        </ListGroupItem>
                    )}
                </ListGroup>
            </div>
        )
    }
}

ListGroup.propTypes = {
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    // boolean to render list group items edge-to-edge in a parent container
    flush: PropTypes.bool,
    className: PropTypes.string,
    cssModule: PropTypes.object,
}

Button.propTypes = {
    active: PropTypes.bool,
    'aria-label': PropTypes.string,
    block: PropTypes.bool,
    color: PropTypes.string, // default: 'secondary'
    disabled: PropTypes.bool,
    outline: PropTypes.bool,

    // Pass in a Component to override default button element
    // example: react-router Link
    // default: 'button'
    tag: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.string,
        PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        PropTypes.arrayOf(PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.string,
            PropTypes.shape({ $$typeof: PropTypes.symbol, render: PropTypes.func }),
        ]))
    ]),

    // ref will only get you a reference to the Button component, use innerRef to get a reference to the DOM element (for things like focus management).
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),

    onClick: PropTypes.func,
    size: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,

    // use close prop for BS4 close icon utility
    close: PropTypes.bool,
}

Button.defaultProps = {
    color: 'secondary',
    tag: 'button',
}

export default SearchList