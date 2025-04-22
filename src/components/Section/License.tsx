import styled from '@emotion/styled';
import itq_logo from './../../assets/images/logo/itq_logo.png';
import word_logo from './../../assets/images/logo/word_logo.png';
import info_license from './../../assets/images/license/info_license.png';
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

const CertificatesWrapper = styled.div`
  background-color: #fff;
  padding-top: 15vh;

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
`;

const CertificatesContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 7fr;
  row-gap: 60px;
  margin: auto;
  max-width: 750px;
  justify-items: start;
  padding-top: 100px;

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
  width: 170px;
  height: 170px;
  border-radius: 100px;
  border: 1px solid #cfcfcf;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.1);
`;

const DescribeContainer = styled.div`
  line-height: 1.7;
  padding-top: 10px;
  padding-left: 80px;
  .type {
    font-weight: bold;
    font-size: 23px;
  }

  .year {
    font-size: 18px;
  }

  .issuer {
    font-size: 18px;
  }

  .num {
    font-size: 18px;
  }
`;

const Certificates = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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
    <CertificatesWrapper>
      <div ref={containerRef} className={isVisible ? 'title visible' : 'title'}>
        License
      </div>
      <CertificatesContainer
        ref={containerRef}
        className={isVisible ? 'visible' : ''}
      >
        {/* 1 */}
        <TypeContainer>
          <TypeBox bg_logo={info_license}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>정보처리기사</div>
          <div className='year'>취득년도 : 2024</div>
          <div className='issuer'>발급기관 : 한국산업인력공단</div>
          <div className='num'>자격증 번호 : 24203080322F</div>
        </DescribeContainer>
        {/* 2 */}
        <TypeContainer>
          <TypeBox bg_logo={word_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>워드프로세스 1급</div>
          <div className='year'>취득년도 : 2011</div>
          <div className='issuer'>발급기관 : 대한상공회의소</div>
          <div className='num'>자격증 번호 : 11-I9-639764-00</div>
        </DescribeContainer>
        {/* 3 */}
        <TypeContainer>
          <TypeBox bg_logo={itq_logo}></TypeBox>
        </TypeContainer>
        <DescribeContainer>
          <div className='type'>ITQ OA 마스터 | 한글, 엑셀, 파워포인트</div>
          <div className='year'>등급 : ALL A </div>
          <div className='year'>취득년도 : 2011</div>
          <div className='issuer'>발급기관 : 한국생산성본부</div>
          <div className='num'>자격증 번호 : A001-2009109-002936</div>
        </DescribeContainer>
      </CertificatesContainer>
    </CertificatesWrapper>
  );
};
export default Certificates;
