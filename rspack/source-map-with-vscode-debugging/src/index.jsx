import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './hello-world.jsx';

function App() {
  return (
    <div className="app">
      <HelloWorld />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
