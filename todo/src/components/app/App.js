import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../serch-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css'

const App = () => {
    const todoData = [
        {label: 'Drink', important: false, id: 1 },
        {label: 'Eat', important: true, id: 2 },
        {label: 'Alcohol', important: false, id: 3 },
    ];
    return (
        <div className='todo-app'>
            <AppHeader/>            
            <SearchPanel/>
            <ItemStatusFilter/>
            <TodoList todos={todoData}/>
        </div>
    );
};

export default App;