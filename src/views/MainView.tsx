import styled from '@emotion/styled';
import Banner from '../components/Section/Banner';
import Profile from '../components/Section/Profile';
import Skills from '../components/Section/Skills';
import Archiving from '../components/Section/Archiving';
import Project from '../components/Section/Project';
import Introduction from '../components/Section/Introduction';
import Awards from '../components/Section/Awards';
import License from '../components/Section/License';
import { SectionRefs } from '../types/types.ts';
import TextCursor from '../styles/TextCursor/TextCursor.tsx';

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

      <TextCursor
        text='🦋'
        delay={0.01}
        spacing={80}
        followMouseDirection={true}
        randomFloat={true}
        exitDuration={0.1}
        removalInterval={20}
        maxPoints={7}
      />

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
