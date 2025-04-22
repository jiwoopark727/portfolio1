import styled from '@emotion/styled';
import CodingAwards from './../../assets/images/awards_completion/CodingAwards.jpg';
import EsportsAwards from './../../assets/images/awards_completion/EsportsAwards.jpg';
import GameAwards from './../../assets/images/awards_completion/GameAwards.jpg';
import WorkExperienceCompletion from './../../assets/images/awards_completion/WorkExperienceCompletion.png';
import SWVentureCompletion from './../../assets/images/awards_completion/SWVentureCompletion.jpg';
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
  background-color: #f9fafb;
  padding-top: 15vh;
  padding-bottom: 15vh;

  .title {
    display: flex;
    justify-content: center;
    font-size: 35px;
    font-weight: 800;

    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    &.visible {
      animation: ${fadeIn} 1s forwards;
    }
  }

  .sub_title {
    display: flex;
    justify-content: center;
    font-size: 17px;

    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    &.visible {
      animation: ${fadeIn} 1s forwards;
    }
  }
`;

const AwardsContainer = styled.div`
  display: grid;
  grid-template-columns: 3.9fr 6.1fr;
  row-gap: 50px;
  margin: 0 auto;
  max-width: 850px;
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
  width: 180px;
  height: 255px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const DescribeContainer = styled.div`
  line-height: 1.7;
  margin-top: 25px;
  .type {
    font-weight: bold;
    font-size: 22px;
    padding-bottom: 15px;
  }

  .sub_type {
    font-weight: bold;
    margin-right: 4px;
    font-size: 17px;
  }

  .year {
    font-size: 17px;
  }

  .issuer {
    font-size: 17px;
  }

  .num {
    font-size: 17px;
  }

  .des {
    font-size: 17px;
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
      { threshold: 0.2 }
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
        Awards
      </div>
      <br />
      <div
        ref={containerRef}
        className={isVisible ? 'visible sub_title' : 'sub_title'}
      >
        + Completion
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
          <div className='num'>
            <span className='sub_type'>등급 :</span> 장려상
          </div>
          <div className='year'>
            <span className='sub_type'>수상 날짜 :</span> 2024.09.30
          </div>
          <div className='issuer'>
            <span className='sub_type'>주최 기관 :</span> 순천향대학교
            SW벤처스타트업아카데미센터
          </div>
          <div className='des'>
            <span className='sub_type'>설명 : </span>
            SW벤처스타트업아카데미센터에서 실시한 코딩 경시대회에서 작년엔
            입상하지 못했지만 백준 문제와 알고리즘 관련 책을 공부함으로써 입상을
            했습니다.
          </div>
        </DescribeContainer>
        {/* 2 */}
        <TypeContainer>
          <TypeBox bg_logo={GameAwards}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>앱/게임 개발 경진대회</div>
          <div className='num'>
            <span className='sub_type'>등급 :</span> 장려상
          </div>
          <div className='year'>
            <span className='sub_type'>수상 날짜 :</span> 2024.10.31
          </div>
          <div className='issuer'>
            <span className='sub_type'>주최 기관 :</span> 순천향대학교
            SW벤처스타트업아카데미센터
          </div>
          <div className='des'>
            <span className='sub_type'>설명 :</span>
            캔버스와 JavaScript로 버블 슈팅 퍼즐 게임을 만들어 출품하여
            입상하였습니다. 공 부착과 반사 매커니즘과 전체적인 UI 디자인에
            집중하여 개발했습니다.
          </div>
        </DescribeContainer>
        {/* 3 */}
        <TypeContainer>
          <TypeBox bg_logo={EsportsAwards}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>SW융합대학 학술제 | e-sports 개발 경진대회</div>
          <div className='num'>
            <span className='sub_type'>등급 :</span> 우수상
          </div>
          <div className='year'>
            <span className='sub_type'>수상 날짜 :</span> 2024.11.06
          </div>
          <div className='issuer'>
            <span className='sub_type'>주최 기관 :</span> 순천향대학교
            SW융합대학
          </div>
          <div className='des'>
            <span className='sub_type'>설명 :</span>
            모바일 게임 Flappy Bird를 모티브로 개발하였으며 Firebase Realtime
            DB로 랭킹시스템을 추가했습니다.
          </div>
        </DescribeContainer>
        {/* 4 */}
        <TypeContainer>
          <TypeBox bg_logo={WorkExperienceCompletion}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>
            청년 일경험 과정 React 2기(프로젝트형) | 고용노동부 주관
          </div>
          <div className='num'>
            <span className='sub_type'>등급 :</span> 수료
          </div>
          <div className='year'>
            <span className='sub_type'>교육 기간 :</span>
            2024.08.19 - 2024.09.27 (수료일: 2024.09.27)
          </div>
          <div className='issuer'>
            <span className='sub_type'>주최 기관 :</span>
            (주) 웅진싱크빅 - 기업 : 테라파이
          </div>
          <div className='des'>
            <span className='sub_type'>설명 :</span>
            청년 일경험 React 과정에 참가하여 React에 대한 동작원리와 중요 개념
            강의르 수강하고 회사 측과 연계 협업 프로젝트를 완료했습니다.
          </div>
        </DescribeContainer>
        {/* 5 */}
        <TypeContainer>
          <TypeBox bg_logo={SWVentureCompletion}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>SW벤처스타트업아카데미사업</div>
          <div className='num'>
            <span className='sub_type'>등급 :</span> 수료
          </div>
          <div className='year'>
            <span className='sub_type'>교육 기간 :</span>
            2024.03 - 2025.02 (수료일 : 2025.02.20)
          </div>
          <div className='issuer'>
            <span className='sub_type'>주최 기관 :</span>
            SW벤처스타트업아카데미센터
          </div>
          <div className='des'>
            <span className='sub_type'>설명 :</span>
            최신 IT 지정 교과목 수강, 각종 강연 및 취업 박람회 참가, 학술제 및
            경시,경진 대회 참가 등 SW 인재가 되기 위한 여러 프로그램들을 참여,
            수료했습니다.
          </div>
        </DescribeContainer>
      </AwardsContainer>
    </AwardsWrapper>
  );
};
export default Awards;
