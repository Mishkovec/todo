import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';
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

const root =document.getElementById('root');

ReactDOM.render(<App/>, root);