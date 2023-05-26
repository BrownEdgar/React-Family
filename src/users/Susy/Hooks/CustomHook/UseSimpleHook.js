import React, { useState } from "react";


export default function UseSimpleHook(initialValue) {
    const [count ,setCount ] = useState(initialValue)

    const implement = () => {
        setCount(prevCount => prevCount + 1)
    }
    const declement = () => {
        setCount(prevCount => prevCount - 1)
    }
    const reset = () => {
        setCount(initialValue)
    }

    return [count ,{
        implement,
        declement,
        reset
    },setCount
]
}