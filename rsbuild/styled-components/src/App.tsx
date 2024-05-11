import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    color: #fff;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    background-image: linear-gradient(to bottom, #020917, #101725);
  }
`;

const Content = styled.div`
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3.6rem;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Content>
        <Title>Rsbuild with React</Title>
        <Description>Start building amazing things with Rsbuild.</Description>
      </Content>
    </>
  );
};

export default App;
