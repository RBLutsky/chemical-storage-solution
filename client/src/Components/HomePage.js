import React from 'react';
import {Button } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import User from './User';


const Home = () => {
    // render() {
        return (
            <div className='Home'>
                <div className='backgroundImage'></div>
                
                <div className='bg-text'>
                    <h1> CHEMICAL STORAGE SOLUTION</h1>
                    <p>Search for safe storage information by chemical name.  Save chemicals to your own inventory sorted for you by storage code. </p>
                    

                        {/* <User /> */}

                        <Link to='/chemical'> 
                            <Button color="primary">SEARCH</Button>
                        </Link>

                        <Link to='/inventory'> 
                            <Button color="primary">VIEW INVENTORY</Button>
                        </Link>
                </div>
            </div>
        )
    }
// }

// Jumbotron.propTypes = {
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     fluid: PropTypes.bool,
//     className: PropTypes.string
// };

export default Home