import styled from '@emotion/styled';
import g_logo from './../../assets/images/logo/github_logo.png';
import t_logo from './../../assets/images/logo/tistory_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { keyframes } from '@emotion/react';
import { useEffect, useRef, useState } from 'react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideLeftIn = keyframes`
  from {
    transform: translateX(-10vh);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRightIn = keyframes`
  from {
    transform: translateX(10vh);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ArchivingWrapper = styled.div`
  background-color: #f9fafb;
  padding-top: 10vh;
  padding-bottom: 17vh;

  .title {
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-weight: 800;

    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    &.visible {
      animation: ${fadeIn} 2s forwards;
    }
  }
`;

const ArchivingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 900px;
  justify-items: center;
`;

// 깃헙 박스
const ArchivingBox1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;
  font-size: 25px;
  width: 350px;
  height: 250px;
  border-radius: 25px;
  background-color: #f9fafb;
  border: 1px solid #cacaca;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.05) !important;
  }

  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    animation: ${slideLeftIn} 0.5s ease-out forwards;
  }
`;

// 티스토리 박스
const ArchivingBox2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;
  font-size: 25px;
  width: 350px;
  height: 250px;
  border-radius: 25px;
  /* background-color: rgba(51, 112, 255, 0.07); */
  background-color: #f9fafb;
  border: 1px solid #cacaca;
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.05) !important;
  }
  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    animation: ${slideRightIn} 0.5s ease-out forwards;
  }
`;

const InnerContent = styled.div<{ bg_logo: string }>`
  .icon {
    font-size: 30px;
  }

  .title_wrapper {
    display: flex;
    justify-content: center;
  }

  .g_title {
    padding-left: 5px;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .g_link {
    font-size: 20px;
    color: #1e1ef7;
    text-decoration: none;
  }

  .t_title {
    background-image: url(${(props) => props.bg_logo});
    background-size: cover;
    background-position: center center;
    width: 125px;
    height: 36px;
    margin-bottom: 19px;
  }

  .t_link {
    font-size: 20px;
    color: #1e1ef7;
    text-decoration: none;
  }

  .text {
    font-size: 18px;
    line-height: 2.5;
  }
`;

const Archiving = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.9 }
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

  const openGitHub = () => {
    window.open('https://github.com/jiwoopark727', '_blank'); // 새 창으로 GitHub 열기
  };

  const openBlog = () => {
    window.open('https://devvoo.tistory.com', '_blank'); // 새 창으로 Blog 열기
  };

  return (
    <ArchivingWrapper>
      <div ref={containerRef} className={isVisible ? 'title visible' : 'title'}>
        Archiving
      </div>
      <ArchivingContainer>
        <ArchivingBox1
          onClick={openGitHub}
          ref={containerRef}
          className={isVisible ? 'visible' : ''}
        >
          <InnerContent bg_logo={g_logo}>
            <div className='g_title'>
              <FontAwesomeIcon icon={faGithub} className='icon' />
              <span style={{ marginLeft: '7px' }}>GitHub</span>
            </div>
            <a target='_blank' rel='noopener noreferrer' className='g_link'>
              github.com/jiwoopark727
            </a>
            <div className='text'>소스 코드 저장소</div>
          </InnerContent>
        </ArchivingBox1>
        <ArchivingBox2
          onClick={openBlog}
          ref={containerRef}
          className={isVisible ? 'visible' : ''}
        >
          <InnerContent bg_logo={t_logo}>
            <div className='title_wrapper'>
              <div className='t_title'></div>
            </div>
            <a target='_blank' rel='noopener noreferrer' className='t_link'>
              devvoo.tistory.com
            </a>
            <div className='text'>공부 및 지식 공유 목적의 블로그</div>
          </InnerContent>
        </ArchivingBox2>
      </ArchivingContainer>
    </ArchivingWrapper>
  );
};
export default Archiving;
