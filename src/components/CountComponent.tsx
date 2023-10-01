import { useContext } from "react"
import { CountContext } from "../App"

function CountComponent() { 
    const {count} = useContext(CountContext)
    return (
        <h1 className="text-2xl">{count}</h1>
    )
}
export default CountComponent