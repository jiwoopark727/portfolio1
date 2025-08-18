import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import FallingText from '../../styles/FallingText/FallingText';
import PassScrollAfterClick from '../../styles/FallingText/PassScrollAfterClick';

const slideDown = keyframes`
  from {
    transform: translateY(-18vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const GuideText = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  color: #c5c5c5;
`;

const IntroductionWrapper = styled.div`
  height: 67vh;
  background-color: #fff;
  padding-top: 18vh;
`;

const IntroductionContainer = styled.div`
  display: grid;
  height: 100%;
  text-align: center;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.9;
  opacity: 0;
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;
  grid-template-columns: 1fr 1fr 1fr;

  &.visible {
    animation: ${slideDown} 0.7s ease-out forwards;
  }
`;

const Introduction = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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
    <>
      <GuideText>아래 문구들을 클릭해보세요!</GuideText>
      <IntroductionWrapper>
        <IntroductionContainer
          ref={containerRef}
          className={isVisible ? 'visible' : ''}
        >
          <PassScrollAfterClick>
            <FallingText
              text='소통을 중요시하며, 사용자 친화적인 웹을 개발하고자 노력합니다.'
              highlightWords={['소통', '사용자', '친화적인']}
              highlightClass='highlighted'
              trigger='click'
              backgroundColor='transparent'
              wireframes={false}
              gravity={0.56}
              fontSize='1.5rem'
              mouseConstraintStiffness={0.9}
            />
          </PassScrollAfterClick>
          <PassScrollAfterClick>
            <FallingText
              text='단순한 기능을 넘어, 직관적이고 감각적인 경험을 제공하고자 합니다.'
              highlightWords={['직관적이고', '감각적인']}
              highlightClass='highlighted'
              trigger='click'
              backgroundColor='transparent'
              wireframes={false}
              gravity={0.56}
              fontSize='1.5rem'
              mouseConstraintStiffness={0.9}
            />
          </PassScrollAfterClick>
          <PassScrollAfterClick>
            <FallingText
              text='저와 함께라면 일상이 새로워질 것입니다.'
              highlightWords={['일상']}
              highlightClass='highlighted'
              trigger='click'
              backgroundColor='transparent'
              wireframes={false}
              gravity={0.56}
              fontSize='1.5rem'
              mouseConstraintStiffness={0.9}
            />
          </PassScrollAfterClick>
        </IntroductionContainer>
      </IntroductionWrapper>
    </>
  );
};
export default Introduction;
