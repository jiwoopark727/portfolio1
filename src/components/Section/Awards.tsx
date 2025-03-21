import styled from '@emotion/styled';
import CodingAwards from './../../assets/images/CodingAwards.jpg';
import EsportsAwards from './../../assets/images/EsportsAwards.jpg';
import GameAwards from './../../assets/images/GameAwards.jpg';
import { useEffect, useRef, useState } from 'react';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-10vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const AwardsWrapper = styled.div`
  background-color: #fff;
  padding-top: 10vh;
  padding-bottom: 15vh;

  .title {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: 800;

    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    &.visible {
      animation: ${fadeIn} 1s forwards;
    }
  }
`;

const AwardsContainer = styled.div`
  display: grid;
  grid-template-columns: 3.3fr 6.7fr;
  row-gap: 50px;
  margin: 0 auto;
  max-width: 1100px;
  justify-items: start;
  padding-top: 80px;

  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    animation: ${slideDown} 0.5s ease-out forwards;
  }
`;

const TypeContainer = styled.div`
  border-right: 2px solid #c9c9c9;
  padding-right: 80px;
`;

const TypeBox = styled.div<{ bg_logo: string }>`
  background-color: #fff;
  background-image: url(${(props) => props.bg_logo});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 198px;
  height: 280px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const DescribeContainer = styled.div`
  line-height: 1.7;
  padding-top: 10px;
  .type {
    font-weight: bold;
    font-size: 32px;
  }

  .year {
    font-size: 24px;
  }

  .issuer {
    font-size: 24px;
  }

  .num {
    font-size: 24px;
  }

  .des {
    font-size: 24px;
  }
`;

const Awards = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
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
    <AwardsWrapper>
      <div ref={containerRef} className={isVisible ? 'title visible' : 'title'}>
        수상 내역
      </div>
      <AwardsContainer
        ref={containerRef}
        className={isVisible ? 'visible' : ''}
      >
        {/* 1 */}
        <TypeContainer>
          <TypeBox bg_logo={CodingAwards}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>제2회 코딩 경시대회</div>
          <div className='num'>등급 : 장려상</div>
          <div className='year'>수상 연도 : 2024년 9월 30일</div>
          <div className='issuer'>
            주최 기관 : 순천향대학교 SW벤처스타트업아카데미센터
          </div>
          <div className='des'>설명 : </div>
        </DescribeContainer>
        {/* 2 */}
        <TypeContainer>
          <TypeBox bg_logo={GameAwards}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>앱/게임 개발 경진대회</div>
          <div className='num'>등급 : 장려상</div>
          <div className='year'>수상 연도 : 2024년 10월 31일</div>
          <div className='issuer'>
            주최 기관 : 순천향대학교 SW벤처스타트업아카데미센터
          </div>
          <div className='des'>설명 : </div>
        </DescribeContainer>
        {/* 3 */}
        <TypeContainer>
          <TypeBox bg_logo={EsportsAwards}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>SW융합대학 학술제 | e-sports 개발 경진대회</div>
          <div className='num'>등급 : 우수상</div>
          <div className='year'>수상 연도 : 2024년 11월 6일</div>
          <div className='issuer'>주최 기관 : 순천향대학교 SW융합대학</div>
          <div className='des'>설명 : </div>
        </DescribeContainer>
      </AwardsContainer>
    </AwardsWrapper>
  );
};
export default Awards;
