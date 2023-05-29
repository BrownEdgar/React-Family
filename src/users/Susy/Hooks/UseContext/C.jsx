import React, {useContext} from "react";
import { MyContext } from "./App";


export default function C() {
    return (
        <div>
            <MyContext.Consumer>
                {(value) => <h2>C Component :{value}</h2>}
            </MyContext.Consumer>
            
        </div>
    )
}