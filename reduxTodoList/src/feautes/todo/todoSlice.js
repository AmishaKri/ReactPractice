import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos:[{
        id: 1,
        text: "Hello World"
    }]
}
// function sayHello(){
//     console.log("Hello World")
// }
export const todoSlice = createSlice({
    name: 'todo',
    initialState, //initial stae
    reducers: {
        //addTodo: sayHello === pass references
        addTodo: (state, action) => {
            const todo ={
                id: nanoid(),
                 text: action.payload // payload is an Object = text:  action.payload.text
            }
            state.todos.push(todo)
        },  //======== Property
        // state gives the initial state value  and Action gives the unique id for remove
        removeTodo: (state, action) => {
            state.todos= state.todos.filter((todo)=> todo.id!== action.payload)
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer