import { useRecoilValue } from "recoil";
import { countState } from "../atoms";

function CountComponent() {
  const count = useRecoilValue(countState);
  return <h1 className="text-2xl">{count}</h1>;
}
export default CountComponent;
