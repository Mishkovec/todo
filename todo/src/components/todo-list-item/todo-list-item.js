import React from 'react';
import './todo-list-item.css'

export default class TodoListItem extends React.Component {
           
    render () {
        const {label, done, important, onToggleImportant, onToggleDone} = this.props;
        
        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }
        
        return (
            <span className={classNames}>
                <span                     
                    className='todo-list-item-label'
                    onClick={onToggleDone}
                >
                    {label}
                </span>
                <div>
                    <button
                        type='button'
                        className='btn btn-outline-success'
                        onClick = {onToggleImportant}
                    >
                        <i className='fa fa-exclamation'/>
                    </button>
                    <button
                        type='button'
                        className='btn btn-outline-danger'
                        onClick= {this.props.onDeleted}
                    >
                        <i className='fa fa-trash-o'/>
                    </button>
                </div>
            </span>
        );
    }
};
