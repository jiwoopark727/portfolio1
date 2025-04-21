import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

const slideIn = keyframes`
  from {
    transform: translateX(-10%);
    opacity: 0;
  }
  to {
    transform: translateX(5%);
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const SkillsWrapper = styled.div`
  height: 75vh;
  background-color: #fff;
  font-weight: bold;
  line-height: 1.9;
  padding-top: 10vh;
  padding-bottom: 10vh;

  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 800;
    padding-bottom: 50px;

    opacity: 0;
    transition: opacity 2s ease-out, transform 2s ease-out;

    &.visible {
      animation: ${fadeIn} 2s ease-out forwards;
    }
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  row-gap: 10px;
  max-width: 980px;
  margin: 0 auto;
  align-items: center;
  height: 380px;
  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    animation: ${slideIn} 0.5s ease-out forwards;
  }
`;

const SkillsBox = styled.div`
  display: flex;
  align-items: center;

  .subject {
    width: 210px;
    font-size: 24px;
  }

  .content {
    padding-left: 15px;
    overflow: hidden;
  }

  .content img {
    height: 38px;
    margin-right: 20px;
    border: 1px solid #cacaca;
    box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.1);
  }
`;

const Skills = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <SkillsWrapper>
      <div ref={containerRef} className={isVisible ? 'title visible' : 'title'}>
        Skills
      </div>
      <SkillsContainer
        ref={containerRef}
        className={isVisible ? 'visible' : ''}
      >
        <SkillsBox>
          <span className='subject'>프로그래밍 언어</span>
          <span className='content'>
            <img src='https://img.shields.io/badge/HTML-white.svg?style=for-the-badge&logo=html5&logoColor=E34F26' />
            <img src='https://img.shields.io/badge/JavaScript-white.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E' />
            <img src='https://img.shields.io/badge/React-white.svg?style=for-the-badge&logo=react&logoColor=61DAFB' />
            <img src='https://img.shields.io/badge/TypeScript-white.svg?style=for-the-badge&logo=typescript&logoColor=61DAFB' />
          </span>
        </SkillsBox>
        <SkillsBox>
          <span className='subject'>스타일링</span>
          <span className='content'>
            <img src='https://img.shields.io/badge/styled components-white.svg?style=for-the-badge&logo=styled-components&logoColor=DB7093' />
            <img src='https://img.shields.io/badge/Tailwind CSS-white.svg?style=for-the-badge&logo=TailwindCSS&logoColor=06B6D4' />
            <img src='https://img.shields.io/badge/Emotion-white.svg?style=for-the-badge&logo=Emotion&logoColor=06B6D4' />
          </span>
        </SkillsBox>
        <SkillsBox>
          <span className='subject'>상태 관리</span>
          <span className='content'>
            {/* <img src='https://img.shields.io/badge/Recoil-white.svg?style=for-the-badge&logo=recoil&logoColor=3578E5' /> */}
            <img src='https://img.shields.io/badge/Zustand-white.svg?style=for-the-badge&logo=zustand&logoColor=1572B6' />
            <img src='https://img.shields.io/badge/Redux-white.svg?style=for-the-badge&logo=redux&logoColor=764ABC' />
            <img src='https://img.shields.io/badge/React query-white.svg?style=for-the-badge&logo=reactquery&logoColor=764ABC' />
            <img src='https://img.shields.io/badge/Context API-white.svg?style=for-the-badge&logo=reactquery&logoColor=764ABC' />
          </span>
        </SkillsBox>
        <SkillsBox>
          <span className='subject'>데이터베이스 </span>
          <span className='content'>
            <img src='https://img.shields.io/badge/My SQL-white.svg?style=for-the-badge&logo=mysql&logoColor=4479A1' />
            <img src='https://img.shields.io/badge/FireBase-white.svg?style=for-the-badge&logo=firebase&logoColor=DD2C00' />
            <img src='https://img.shields.io/badge/Maria DB-white.svg?style=for-the-badge&logo=mariadb&logoColor=003545' />
            <img src='https://img.shields.io/badge/Mongo DB-white.svg?style=for-the-badge&logo=mongodb&logoColor=003545' />
          </span>
        </SkillsBox>
        <SkillsBox>
          <span className='subject'>개발 도구</span>
          <span className='content'>
            <img src='https://img.shields.io/badge/GIT-white.svg?style=for-the-badge&logo=git&logoColor=F05032' />
            <img src='https://img.shields.io/badge/Notion-white.svg?style=for-the-badge&logo=notion&logoColor=000000' />
            <img src='https://img.shields.io/badge/Figma-white.svg?style=for-the-badge&logo=figma&logoColor=F24E1E' />
            <img src='https://img.shields.io/badge/GitHub-white.svg?style=for-the-badge&logo=github&logoColor=181717' />
            <img src='https://img.shields.io/badge/Slack-white.svg?style=for-the-badge&logo=slack&logoColor=4A154B' />
          </span>
        </SkillsBox>
      </SkillsContainer>
    </SkillsWrapper>
  );
};
export default Skills;
