import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, moveTodo } from './Redux/Slice/ToDoSlice';

function Home() {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() !== '') {
            const todo = { id: Date.now(), text: newTodo };
            dispatch(addTodo(todo));
            setNewTodo('');
        }
    };
    const moveToCompleted = id => {
        dispatch(moveTodo(id));
    };

    const handleDeleteTodo = id => {
        dispatch(deleteTodo(id));
    }
    const completedTodos = todos.filter(todo => todo.completed);
    
    const updateCount = () => {
        const count =completedTodos.length;
        return count;
      };

return (
        <>
        <div style={{marginLeft:'400px' }}>
            <h1>My Todo List</h1>
                <div className='d-flex justify-content-between'>
                    <input placeholder='add todo...' type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                     <button onClick={handleAddTodo} className='b1 ms-3' style={{ backgroundColor: 'darkgreen', color:'white', padding: '3px', marginLeft: '5px' }} >ADD</button>
                     </div>
                </div>
                
                    <ul>
                    { todos?.length>0? todos.map(todo => (
                        <li key={todo.id}>
                          <div >
                            <div style={{ float: 'left', backgroundColor: "#99ff99" }} >
                              <input type="checkbox" checked={todo.completed} onChange={() => moveToCompleted(todo.id)} style={{ float: 'left' }}/>
                                <p style={{ width: "700px", float: 'left' }}  >{todo.text}</p>
                                <button style={{ marginTop: '10px', marginLeft: '15px', height: '20px', backgroundColor:'darkred',  color:'white'}} onClick={() => handleDeleteTodo(todo.id)}>Delete</button><br />
                            </div>
                          </div>
                     <br/><br/><br/>
                    
                        </li> )):
                        <p style={{fontFamily:'sans-serif',fontWeight:'bolder', color:'red',marginLeft:'35%',marginTop:'30px'}}>Your Todo List Is Empty !!!</p>
                    }
                    </ul>
                       
              <div className='border rounded  mb-3 p-2'>
                    <div className='d-flex icons alighn items center' >
                        <ul>
                             {/* <p>completed items : {completedTodos.length}</p> */}
                             {updateCount() > 0 && <p style={{fontFamily:'sans-serif',fontWeight:'bolder'}}>Completed Todos: {updateCount()}</p>}
                            { completedTodos.map(todo => (                                
                                <li key={todo.id}>
                                 <div className='mt-4' style={{ float: 'left', backgroundColor: "#ff471a" }} >
                                        <input type="checkbox" checked={todo.completed} onChange={() => moveToCompleted(todo.id)} style={{ float: 'left' }}/>
                                        <p style={{ width: "700px", float: 'left' }}  >{todo.text}</p>
                                        <button style={{ marginTop: '10px', marginLeft: '15px', height: '20px',  color:'white', backgroundColor:'darkblue'}} onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                                    </div>
                            <br/><br/><br/>
                            </li> ))
                            }
                        </ul>
                </div>
                </div>        
        </>
    );
}
export default Home;