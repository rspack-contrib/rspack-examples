import { css, Global } from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    color: #fff;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    background-image: linear-gradient(to bottom, #020917, #101725);
  }
`;

const contentStyles = css`
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.2rem;
    font-weight: 400;
    opacity: 0.5;
  }
`;

const App = () => {
  return (
    <div>
      <Global styles={globalStyles} />
      <div css={contentStyles}>
        <h1>Rsbuild with React</h1>
        <p>Start building amazing things with Rsbuild.</p>
      </div>
    </div>
  );
};

export default App;
