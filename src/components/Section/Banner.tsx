import styled from '@emotion/styled';
import bannerBg from '../../assets/images/banner_bg.jpg';
import ArrowDown from '../Styled/ArrowDown';
import TypeIt from 'typeit-react';

const BannerWrapper = styled.div`
  height: 100vh;
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 200px;
`;

const BannerContainer = styled.div``;

const BannerText = styled.div`
  opacity: 0;
  animation: fadeIn 4s forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 70px;
    padding-bottom: 30px;
  }

  .title {
    font-size: 70px;
    padding-bottom: 80px;
  }

  .contour {
    /* border: 2px solid #8596f2; */
    border: 2px solid black;
    margin: 20px auto;
    width: 10%;
    margin-bottom: 110px;
  }

  .Introduction {
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    visibility: hidden;
    animation: showText 0.1s 0.5s forwards;
    padding-bottom: 15px;
  }

  @keyframes showText {
    0% {
      visibility: hidden;
    }
    100% {
      visibility: visible;
    }
  }
`;

const Banner = () => {
  const handleArrowClick = () => {
    const goalHeight = document.documentElement.clientHeight - 69;
    window.scrollTo({
      top: goalHeight,
      behavior: 'smooth',
    });
  };

  return (
    <BannerWrapper>
      <BannerContainer>
        <BannerText>
          <h1 className='name'>&lt; 박지우 /&gt;</h1>
          <h2 className='title'>웹 개발자 포트폴리오</h2>
          {/* 구분선 */}
          <hr className='contour' />
          <h3 className='Introduction'>
            <TypeIt
              options={{
                speed: 100,
                startDelay: 2000,
                waitUntilVisible: true,
                cursor: false,
              }}
            >
              안녕하세요.
            </TypeIt>
          </h3>
          <h3 className='Introduction'>
            <TypeIt
              options={{
                speed: 110,
                startDelay: 2900,
                waitUntilVisible: true,
                cursor: false,
              }}
            >
              감각 있는 웹 개발자
            </TypeIt>
          </h3>
          <h3 className='Introduction'>
            <TypeIt
              options={{
                speed: 120,
                startDelay: 4300,
                waitUntilVisible: true,
                cursor: false,
              }}
            >
              박지우입니다.
            </TypeIt>
          </h3>
        </BannerText>

        <ArrowDown onClick={handleArrowClick} />
      </BannerContainer>
    </BannerWrapper>
  );
};
export default Banner;
