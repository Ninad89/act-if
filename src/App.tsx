import { useState } from 'react';
import ActIf from '../lib/components/act-if';

import './App.css';

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>React Act If</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
            </div>
            <ActIf condition={count < 5 || count > 10}>Show This</ActIf>
        </>
    );
}

export default App;
