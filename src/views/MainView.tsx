import styled from '@emotion/styled';
import Banner from '../components/Section/Banner';
import Profile from '../components/Section/Profile';
import Skills from '../components/Section/Skills';
import Archiving from '../components/Section/Archiving';
import Project from '../components/Section/Project';
import Introduction from '../components/Section/Introduction';
import Awards from '../components/Section/Awards';
import Certificates from '../components/Section/Certificates';

const MainViewContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 280px;
`;

const MainView = () => {
  return (
    <MainViewContainer>
      <Banner />
      <Introduction />
      <Profile />
      <Skills />
      <Archiving />
      <Project />
      <Awards />
      <Certificates />
    </MainViewContainer>
  );
};
export default MainView;
