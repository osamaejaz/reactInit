import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import { Hello } from './components/hello';
function App() {
    return (
        <div className='App'>
            {/* <Greet /> */}
            <Welcome name='Osama' end='Ejaz'>
                {' '}
            </Welcome>
            <Hello name='Osama' end='Ejaz'>
                <p></p>
            </Hello>
        </div>
    );
}

export default App;
