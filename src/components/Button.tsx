import Decrease from "./Decrease";
import Increase from "./Increase";

function Button() {
  return (
    <div className="flex justify-center space-x-10">
      <Increase />
      <Decrease />
    </div>
  );
}

export default Button;
