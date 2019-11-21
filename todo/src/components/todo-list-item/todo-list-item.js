import React from 'react';
import './todo-list-item.css'

export default class TodoListItem extends React.Component {
    render () {
        const {label, important=false} = this.props;
        const style = {
            color: important ? 'tomato' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        }
        return (
            <span className='todo-list-item'>
                <span 
                    style={style}
                    className='todo-list-item-label'
                >
                    {label}
                </span>
                <div>
                    <button
                        type='button'
                        className='btn btn-outline-success'
                    >
                        <i className='fa fa-exclamation'/>
                    </button>
                    <button
                        type='button'
                        className='btn btn-outline-danger'
                    >
                        <i className='fa fa-trash-o'/>
                    </button>
                </div>
            </span>
        );
    }
};
