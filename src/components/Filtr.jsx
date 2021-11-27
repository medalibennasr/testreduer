import React from 'react';
import './csstyle.css';

function Filtr(todo) {
    
        return (
        <div style={{display:"flex" , justifyContent:'space-between' , marginBottom:'50px' }}>
            <button
            
            type="button"
            onClick={() => todo.filter(todo.done = 1)}
            
            
            className='filtr' style={{marginLeft:'80px' , background:'#8cc751', padding:'10px'}} >Done</button>
            <button
            type="button"
            onClick={() => todo.filter((todo.done = 1) || (todo.done = 0 ))}

            className='filtr' style={{ background:'#808080',color:'white', padding:'10px'}}>All</button>
            <button
            type="button"
            onClick={() => todo.filter(todo.done = 0  )}

            className='filtr' style={{ marginRight:'80px', background:'#ffb861', padding:'10px'}}>Not</button>
        </div>
    )
}

export default Filtr
