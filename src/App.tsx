import Button from "./components/Button";
import CountComponent from "./components/CountComponent";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="flex flex-col items-center m-10 shadow-md h-80 bg-slate-200 p-10 rounded-md">
        <h1 className="text-2xl">Counter App - Recoil</h1>
        <CountComponent />
        <Button />
      </div>
    </RecoilRoot>
  );
}

export default App;
