import styled from '@emotion/styled';
import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import Banner from './components/Section/Banner';
import { Global, css } from '@emotion/react';
// import { PretendardRegular } from './assets/Pretendard-1.3.9/web/';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Section = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 280px;
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <Navbar></Navbar>
      <Section>
        <Banner></Banner>
      </Section>
      <Footer></Footer>
    </>
  );
}

export default App;
