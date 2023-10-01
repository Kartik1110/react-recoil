import { useState, createContext } from "react";
import Button from "./components/Button";
import CountComponent from "./components/CountComponent";

export const CountContext = createContext();

function App() {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider
      value={{
        count,
        setCount,
      }}
    >
      <div className="flex flex-col items-center m-10 shadow-md h-80 bg-slate-200 p-10 rounded-md">
        <h1 className="text-2xl">Counter App - Recoil</h1>
        <CountComponent />
        <Button />
      </div>
    </CountContext.Provider>
  );
}

export default App;
