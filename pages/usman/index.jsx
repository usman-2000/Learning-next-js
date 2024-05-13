import { Button } from "@/components/button/Button";

export default function Usman(props) {
    return (
        <div>
            {
                props.res?.map((d) => {
                    return <h1>Title : {d.title}</h1>
                })
            }
            <Button >Click Btn</Button>
        </div>
    )
}

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")
    console.log(response)
    const res = await response.json()

    return {
        props: {
            res: res
        }
    }
}