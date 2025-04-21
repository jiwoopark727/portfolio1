import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

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

const IntroductionWrapper = styled.div`
  height: 67vh;
  background-color: #fff;
  padding-top: 18vh;
`;

const IntroductionContainer = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.9;
  opacity: 0;
  transition: opacity 0.7s ease-out, transform 0.7s ease-out;

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
    <IntroductionWrapper>
      <IntroductionContainer
        ref={containerRef}
        className={isVisible ? 'visible' : ''}
      >
        소통을 중요시하며, 사용자 친화적인 웹을 개발하고자 노력합니다.
        <br />
        단순한 기능을 넘어, 직관적이고 감각적인 경험을 제공합니다.
        <br />
        저와 함께라면 여러분의 일상이 새로워질 것입니다.
      </IntroductionContainer>
    </IntroductionWrapper>
  );
};
export default Introduction;
