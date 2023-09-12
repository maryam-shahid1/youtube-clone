import React from 'react';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import '../index.css'

class SearchBar extends React.Component {
    state = {
        title: ''
    }

    onSearchChanged = event => {
        const _title = event.target.value
        this.setState({ title: _title })
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSearch(this.state.title)
    }

    render() {
        return (
            <div>
                <Paper
                    component='form'
                    onSubmit={this.onSubmit}
                    sx={{
                        borderRadius: 20,
                        marginLeft: '80%',
                        width: '500px',
                        marginTop: '33px',
                        border: '1px solid #e3e3e3',
                        pl: 2,
                        boxShadow: 'none',
                        mr: { sm: 5 },
                    }}
                >
                    <input
                        className='search-bar'
                        placeholder='Search'
                        value={this.state.title}
                        onChange={this.onSearchChanged}
                    ></input>

                    <IconButton type='submit'>
                        <Search />
                    </IconButton>

                </Paper >
            </div >
        )
    };
};

export default SearchBar;

