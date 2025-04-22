import styled from '@emotion/styled';
import Banner from '../components/Section/Banner';
import Profile from '../components/Section/Profile';
import Skills from '../components/Section/Skills';
import Archiving from '../components/Section/Archiving';
import Project from '../components/Section/Project';
import Introduction from '../components/Section/Introduction';
import Awards from '../components/Section/Awards';
import License from '../components/Section/License';
import { SectionRefs } from '../types/types.ts'; // 경로에 맞게

const MainViewContainer = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 280px;
`;

const MainView = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  return (
    <MainViewContainer>
      <div ref={sectionRefs.banner}>
        <Banner />
      </div>

      <Introduction />

      <div ref={sectionRefs.profile}>
        <Profile />
      </div>
      <div ref={sectionRefs.skills}>
        <Skills />
      </div>
      <div ref={sectionRefs.archiving}>
        <Archiving />
      </div>
      <div ref={sectionRefs.project}>
        <Project />
      </div>
      <div ref={sectionRefs.awards}>
        <Awards />
      </div>
      <div ref={sectionRefs.license}>
        <License />
      </div>
    </MainViewContainer>
  );
};

export default MainView;
