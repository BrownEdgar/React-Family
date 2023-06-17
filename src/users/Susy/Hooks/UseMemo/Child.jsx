import React, {memo} from "react";

function Child({data}) {
    console.log("Child render...")
    // let sum = 0
    // for(let i = 0; i < 1e5; i++) {
    //     sum += i
    // }

    return (
        <div>
            {/* <h1>handleClick</h1> */}
            {/* <h1>Child count: {count}</h1>
            <h1>Total: {sum}</h1> */}
            {/* {
                data.map(elem => {
                    return (
                        <p key={elem.id}>{elem.title}</p>
                    )
                })
            } */}
            {
                data.map(todo => <p key={todo.id}>{todo.title}</p>)
            }
        </div>
    )
}

export default memo(Child)

// export default memo(Child, (prevProps,nextProps) => {
    // console.log(prevProps,nextProps)
    // return true
    // if(nextProps.count > 5) {
    //     return true
    // }
    // return false
// })