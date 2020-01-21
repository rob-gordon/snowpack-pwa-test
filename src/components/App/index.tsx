import { h, FunctionalComponent } from "/web_modules/preact.js";
import { useState } from "/web_modules/preact/hooks.js";

const App: FunctionalComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>The count is {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
