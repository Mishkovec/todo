import React from 'react';

export default class SearchPanel extends React.Component {
    state = {
        term: ''
    }
    onSerach=(e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }
    render () {
        return (
            <input 
                type='text'
                className='form-control search-input'
                placeholder='search'
                value={this.state.term}
                onChange={this.onSerach}
            />
        );
    }
};

