import React,{ useContext} from "react";
import { userContext } from "react";

export function Context() {
    let user = useContext(userContext)
    return <h3>Hello, {user}</h3>
}