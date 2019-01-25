import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import User from './User';

const Home = () => {
    // render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3"> CHEMICAL STORAGE SOLUTION</h1>
                    <p className="lead">Search for safe storage information by chemical name.  Save chemicals to your own inventory sorted for you by storage code. </p>
                    <hr className="my-2" />
                    <p className="lead">

                        {/* <User /> */}

                        <Link to='/chemical'> 
                            <Button color="primary">SEARCH</Button>
                        </Link>

                        <Link to='/inventory'> 
                            <Button color="primary">VIEW INVENTORY</Button>
                        </Link>
                    </p>
                </Jumbotron>
            </div>
        )
    }
// }

Jumbotron.propTypes = {
    // Pass in a Component to override default element
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    fluid: PropTypes.bool,
    className: PropTypes.string
};

export default Home