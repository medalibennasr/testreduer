
import {ADD_TODO ,DELETE_TODO,UPDATE_TODO , DONE_TODO} from "../actions/actions";
import {todos } from '../data/data';

export let reducer =(data = todos ,action) =>{ 
    let newTodos ;
        switch (action.type) {
            

            case DONE_TODO :
            newTodos = [...data];
            newTodos= !data.done(action.payload);
            return newTodos;

        case ADD_TODO :
            newTodos = [...data];
            newTodos.push(action.payload);
            return newTodos;

      case DELETE_TODO :
            newTodos = [...data];
           newTodos= newTodos.filter(todo=>todo.id != action.payload)
        
            return newTodos;

        case UPDATE_TODO :
            newTodos = [...data];
            let index =-1;
            for (let i=0 ;i<newTodos.length ; i++ ){
                index++;
                if (newTodos[i].id == action.payload.id){
                    break;
                }              
            } 
            if (index != -1 ) {
                newTodos[index]=action.payload;
                         
              return newTodos;
            }
        default:
           
    }
    return data ;
}

