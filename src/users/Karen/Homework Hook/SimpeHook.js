import React, { useState } from "react";

export default function useSimpleHook(initialData) {
    const [data, setData] = useState(initialData)


    const allDone = () => {
        setData(data.map(todo => {
            if(Object.keys(todo).length > 0) {
                return{...todo,completed: true}
            } return todo;
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

    return {
        data,    
        addId,                        
        allDone,
    }
}

