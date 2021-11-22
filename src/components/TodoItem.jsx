import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo , updateTodo } from '../JS/actions/actions';
import  { useState } from 'react';
import '../App.css';
import './csstyle.css'
function TodoItem({todo}) {
    const [edit ,setEdit] =useState (false);
    const [name ,setName] =useState (todo.name);
    let dispatch = useDispatch();
    return (
        <div>
            
            <div className="form input" style={{display:"flex" , }}>
                <div> # </div>
                <div>
                   { edit ? <input   type="text" value={name}
                   onChange={
                       (e)=>setName(e.target.value)
                   }
                   /> : <h4>{todo.name}</h4>}
                    </div>
                
                <button  className="my-btn"
                onClick={()=>{
                    dispatch(updateTodo(
                        {
                            ...todo,
                            name:name
                        }
                    ),setName(todo.name)   );
                    if (edit) {
                        setName(todo.name);
                    }
                    setEdit(!edit)
                }}
                >{edit ? 'UpDate' : 'Edit'}</button>
                <button className="btn-danger"
                onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TodoItem
