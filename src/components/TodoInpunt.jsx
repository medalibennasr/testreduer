import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../JS/actions/actions';
import {v1 as uuid} from 'uuid' ;
import './csstyle.css'

function TodoInpunt() {
    let dispatch = useDispatch();
    let [name, setName]=useState("");
    const handleChange=(e)=>{
        if (e.target.value.length > 14 ) {
            alert("Please Add Task Bettwen 3 and 15 letters")
        }else{
            setName(e.target.value)
        }
    }
    
    return (
        <div>
            
            <div className="form input">
                <input classeName="space input" 
                onChange= { e => handleChange(e)}
                value={name}
                type="text"/>
                <button 
                className="add"
                onClick={() => {
                    name !== ""?dispatch( addTodo( 
                    {
                        id :uuid(),
                        name: name ,
                        done:0,
                    }
                    
                    )):alert("Please Add Task Bettwen 3 and 15 letters")
                    
                setName('');
                }
                }
                
                >Add</button>
            </div>
        </div>
    )
}

export default TodoInpunt
