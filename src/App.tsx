import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import { Global, css } from '@emotion/react';
import MainView from './views/MainView';
import { useEffect, useRef } from 'react';
// import { PretendardRegular } from './assets/Pretendard-1.3.9/web/';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  const sectionRefs = {
    banner: useRef<HTMLDivElement>(null),
    introduction: useRef<HTMLDivElement>(null),
    profile: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    archiving: useRef<HTMLDivElement>(null),
    project: useRef<HTMLDivElement>(null),
    awards: useRef<HTMLDivElement>(null),
    license: useRef<HTMLDivElement>(null),
  };
  return (
    <>
      <Global styles={globalStyles} />
      {/* 헤더 */}
      <Navbar sectionRefs={sectionRefs} />
      {/* 메인 콘텐츠 */}
      <MainView sectionRefs={sectionRefs} />
      {/* 푸터 */}
      <Footer></Footer>
    </>
  );
}

export default App;
