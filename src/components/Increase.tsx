import { useContext } from "react";
import { CountContext } from "../App";

function Increase() {
  const {count, setCount} = useContext(CountContext)
  return (
    <div>
      <button
        className="h-14 w-fit p-4 rounded-md bg-slate-600 text-gray-200 text-lg"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </div>
  );
}
export default Increase;
