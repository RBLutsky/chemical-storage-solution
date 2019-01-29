import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    // render() {
    return (
        <div className="home bg-image">
            <div className='bg-text'>
                <h1> CHEMICAL STORAGE SOLUTION</h1>
                <p>Search for safe storage information by chemical name.  Save chemicals to your own inventory sorted for you by storage code. </p>


                {/* <User /> */}

                <Link to='/chemical'>
                    <button type="button" className="btn btn-secondary">SEARCH</button>
                </Link>

                <Link to='/inventory'>
                    <button type="button" className="btn btn-secondary">VIEW Inventory</button>
                </Link>
            </div>
        </div>
    )
}

export default Home