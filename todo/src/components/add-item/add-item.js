import React from 'react';
import './add-item.css';

export default class AddItem extends React.Component {
    render() {
        return (
            <div className='item-add-form'>
                <button 
                    className='btn btn-outline-secondary'
                    onClick={()=>this.props.onItemAdded('hi')}
                >Add</button>
            </div>
        );
    }    
};