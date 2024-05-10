import { contentStyle, headingStyle, paragraphStyle } from './App.css';

const App = () => {
  return (
    <div className={contentStyle}>
      <h1 className={headingStyle}>Rsbuild with React</h1>
      <p className={paragraphStyle}>Start building amazing things with Rsbuild.</p>
    </div>
  );
};

export default App;
