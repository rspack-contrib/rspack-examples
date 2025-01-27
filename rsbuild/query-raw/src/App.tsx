import cssStr from './App.css?raw';
import jsonStr from '../package.json?raw';

console.log('cssStr', cssStr);
console.log('jsonStr', jsonStr);

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
