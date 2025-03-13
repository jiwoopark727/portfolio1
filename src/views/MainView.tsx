import styled from '@emotion/styled';
import Banner from '../components/Section/Banner';
import AboutMe from '../components/Section/AboutMe';
import Skills from '../components/Section/Skills';
import Archiving from '../components/Section/Archiving';
import Project from '../components/Section/Project';
import Career from '../components/Section/Career';

const MainViewContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 280px;
`;

const MainView = () => {
  return (
    <MainViewContainer>
      <Banner />
      <AboutMe />
      <Skills />
      <Archiving />
      <Project />
      <Career />
    </MainViewContainer>
  );
};
export default MainView;
