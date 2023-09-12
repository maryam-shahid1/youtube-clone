import React from 'react';
import SearchBar from './SearchBar';
import '../index.css'

class Navbar extends React.Component {
    render() {
        return (
            <div className='navbar-container'>
                <img
                    src='https://i0.wp.com/www.dafontfree.io/wp-content/uploads/2021/08/Youtube-Logo-Font-3.jpg?fit=900%2C550&ssl=1'
                    alt='logo'
                    height={100}
                />
                <SearchBar onSearch={this.props.onSearch} />
            </div>
        );
    }
}

export default Navbar;

