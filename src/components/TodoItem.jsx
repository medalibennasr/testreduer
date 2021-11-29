import React from 'react'
import {useDispatch} from 'react-redux';
import { deleteTodo , updateTodo ,doneTodo} from '../JS/actions/actions';
import  { useState } from 'react';
import '../App.css';
import './csstyle.css'
function TodoItem({todo}) {
    const [edit ,setEdit] =useState (false);
    const [name ,setName] =useState (todo.name);
    const [done ,setDone] =useState (false);
    let dispatch = useDispatch();
    return (
        <div>
            
            <div className="form input" style={{display:"flex" }}>
            
                <div style={{display:"flex" , justifyContent:'space-between',width:"700px" }}>
                    <button 
                     onClick={() => dispatch(doneTodo(todo.id)
                     ,setDone(todo.done))}
                    className="done" style={{ background : (todo.done) ?  '#b0f2b6': '#ffb861'  }} >{todo.done? "Done"  :"Not"}</button>

                <div>
                   { edit ? <input   type="text" value={name}
                   onChange={
                       (e)=>setName(e.target.value)
                   }
                   /> : <h4>{todo.name}</h4>}
                    </div>


                <div >
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
                style={{padding:'10px'}}
                onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
                </div>
                </div>

            </div>
        </div>
    )
}

export default TodoItem
