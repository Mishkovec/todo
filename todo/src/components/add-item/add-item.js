import React from 'react';
import './add-item.css';

export default class AddItem extends React.Component {
    state = {
        label: ''
    };
    
    onLabelChange =(e)=> {
        this.setState({
            label:e.target.value
        })
        
    }
    onSubmit =(e) => {
        e.preventDefault();
        this.props.onItemAdded(this.state.label);
        this.setState({label:''});
    }
    render() {
        return (
            <form 
                className='item-add-form d-flex'
                onSubmit={this.onSubmit}
            >
                <input 
                    type='text'
                    className='form-control add'
                    value={this.state.label}
                    onChange={this.onLabelChange}
                    placeholder='What need to be done'
                />
                <button 
                    className='btn btn-outline-secondary'
                >Add</button>
            </form>
        );
    }    
};