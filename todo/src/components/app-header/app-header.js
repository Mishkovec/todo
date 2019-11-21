import React from 'react';

export default class AppHeader extends React.Component {
    render() {
        const {toDo, done} = this.props;
        return (
            <div>
                <h1>ToDo List</h1>
                <p>
                    {toDo} more to do, {done} done
                </p>
            </div>
        );
    }    
};