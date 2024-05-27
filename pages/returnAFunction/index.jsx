'use client'

import { useState } from "react"

// In this function, i am returning a conditional render.
// I am using only one return for if statement as well as function return
export default function ReturnAFunction({ id }) {
    const [newId, setNewId] = useState()
    return (
        <div>{
            !id ? "No ID   found" : "You can see my page here"
        }</div>
    )
}
