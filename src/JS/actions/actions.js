export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DONE_TODO = "DONE_TODO";

export function addTodo (todo){
    return {
        type: ADD_TODO,
        payload: todo,

    }
}

export function doneTodo (todo){
    return {
        type: DONE_TODO,
        payload: todo,

    }
}

export function deleteTodo (todoId){
    return {
        type: DELETE_TODO,
        payload: todoId,

    }
}
export function updateTodo (todo){
    return {
        type: UPDATE_TODO,
        payload: todo,

    }
}
