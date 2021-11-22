import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../JS/actions/actions';
import {v1 as uuid} from 'uuid' ;
import './csstyle.css'

function TodoInpunt() {
    let dispatch = useDispatch();
    let [name, setName]=useState();
    return (
        <div>
            
            <div className="form input">
                <input classeName="space input" 
                onChange= { e => setName(e.target.value)}
                value={name}
                type="text"/>
                <button 
                onClick={() => {
                   dispatch( addTodo( 
                    {
                        id :uuid(),
                        name: name ,
                    }
                    
                    ))
                setName(' ');
                }
                }
                
                >Add</button>
            </div>
        </div>
    )
}

export default TodoInpunt
