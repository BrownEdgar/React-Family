import React, { useState } from "react";


export default function UseTodoHook(initialData) {

    const allDone = () => {
        setData(data.map(todo => {
            if(Object.keys(todo).length > 0) {
                return{...todo,completed: true}
            }
            return todo;
        }
        ))      
    }


    const addId = () => {
        setData(data.map((todo,index) => {
            if(Object.keys(todo).length === 0){
                return{...todo,id:index + 1}
            }return todo
        }
        ))
    }


    const removeById = (id) => {    
        setData(data.filter(todo => todo.id !== id))
    }


    const addTodo = () => {
        setData(data.map((todo) => {
            if(Object.keys(todo).length === 1){
                return {...todo,userId: 1,title:"Lorem ipsum dolor sit amet consectetur.",completed:false}
            }return todo
        }))  
    }
    const [data, setData] = useState(initialData)
    return {
        data,
        allDone,
        addId,
        removeById,
        addTodo,
    }
}