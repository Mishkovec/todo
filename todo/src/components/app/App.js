import React from 'react';
import AppHeader from '../app-header';
import AddItem from '../add-item';
import SearchPanel from '../serch-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import './app.css'

export default class App extends React.Component {
    maxId = 1;
    
    state = {
        todoData: [
            this.createToDoItem('drink'),
            this.createToDoItem('eat'),
            this.createToDoItem('drink juice'),
            this.createToDoItem('drink alcohol'),
        ]
    };

    createToDoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem(id) {
      this.setState(
          ({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id==id);
            // console.log(idx);
            // todoData.splice(idx,1);
            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx+1);
            const newArr =[...before, ...after];
            return {
                todoData: newArr
            }
          }
      ) 
    };

    addItem =(text)=> {
        // console.log(text);
        //generate id
        const newItem = this.createToDoItem(text);
        // add item in arr state
        this.setState(({todoData})=>{
            const newArr=[...todoData, newItem];
            return {
                todoData: newArr
            };
        })

    }
    onToggleImportant = (id) => {
        // console.log('imp', id)
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id==id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, important:!oldItem.important};
            const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];
            return {
                todoData: newArr
            }
        })
    }
    onToggleDone = (id) => {
        // console.log('don', id)
        this.setState(({todoData})=>{
            const idx = todoData.findIndex((el)=>el.id==id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, done:!oldItem.done};
            const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx+1)];
            return {
                todoData: newArr
            }
        })
    }
  
    render () {   
        const doneCount= this.state.todoData
        .filter((el)=>el.done).length ; 

        const todoCount = this.state.todoData.length - doneCount;
          
        return (
            <div className='todo-app'>
                <AppHeader
                    toDo={todoCount}
                    done={doneCount}
                /> 

                <div className='top-panel d-flex'>          
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList 
                    todos={this.state.todoData}
                    onDeleted={(id)=>this.deleteItem(id)}
                    onToggleDone={this.onToggleDone}
                    onToggleImportant={this.onToggleImportant}
                />

                <AddItem 
                    onItemAdded={this.addItem}
                />
            </div>
        );
    }
};
