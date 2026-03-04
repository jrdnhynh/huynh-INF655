import { useState } from "react";

function Counter() {
    // init 'count' state at 0 & 'setCount' to update it
    const [count, setCount] = useState(0);

    return (
        <div>
            {/* display current state value */}
            <h3>Count: {count}</h3>

        {/* on click, setCount increment current value by 1 */}
        <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default Counter;