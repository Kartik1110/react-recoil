import { useSetRecoilState } from "recoil";
import { countState } from "../atoms";

function Decrease() {
  const setCount = useSetRecoilState(countState);
  return (
    <div>
      <button
        className="h-14 w-fit p-4 rounded-md bg-slate-600 text-gray-200 text-lg"
        onClick={() => setCount((count: number) => count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}
export default Decrease;
