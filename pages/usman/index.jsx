import { Button } from "@/components/button/Button";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function Usman(props) {
    const { res } = props
    // const [todos, setTodos] = useState([])
    if (!res.length) {
        return <h1>Loading</h1>
    }

    const todos = res && res.map((d) => {
        return <p>{d.title}</p>
    })

    return (
        <div>
            {
                todos
            }
            <Button >Click Btn</Button>

        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    const res = await response.json()
    console.log(res, "res")

    return {
        props: {
            res: res
        },
        notFound: true,
        revalidate: 10
    }
}