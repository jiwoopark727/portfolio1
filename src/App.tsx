import Footer from './components/Layout/Footer';
import Navbar from './components/Layout/Navbar';
import MainView from './views/MainView';
import { useEffect, useRef } from 'react';
import ScrollToTopButton from './components/Styled/ScrollToTopButton';
import GlobalStyle from './styles/GlobalStyle.tsx';
import TextCursor from './styles/TextCursor.tsx';

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
      <GlobalStyle />

      <TextCursor
        text='💻'
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.3}
        removalInterval={20}
        maxPoints={10}
      />

      {/* 헤더 */}
      <Navbar sectionRefs={sectionRefs} />

      {/* 메인 콘텐츠 */}
      <MainView sectionRefs={sectionRefs} />

      {/* 푸터 */}
      <Footer />

      <ScrollToTopButton />
    </>
  );
}

export default App;
