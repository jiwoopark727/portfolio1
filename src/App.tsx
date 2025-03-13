import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import { Global, css } from '@emotion/react';
import MainView from './views/MainView';
// import { PretendardRegular } from './assets/Pretendard-1.3.9/web/';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      {/* 헤더 */}
      <Navbar></Navbar>
      {/* 메인 콘텐츠 */}
      <MainView />
      {/* 푸터 */}
      <Footer></Footer>
    </>
  );
}

export default App;
