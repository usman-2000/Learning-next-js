import { Button } from "@/components/button/Button";

export default function Usman(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <Button >Click Btn</Button>
        </div>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            name: "Usman Rahim"
        }
    }
}