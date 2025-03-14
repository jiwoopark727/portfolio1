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
  align-items: center;
`;

const BannerContainer = styled.div``;

const BannerText = styled.div`
  opacity: 0;
  animation: fadeIn 3s forwards;

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
    font-size: 80px;
    padding-bottom: 20px;
  }

  .title {
    font-size: 80px;
    padding-bottom: 100px;
  }

  .contour {
    border-bottom: 5px solid black;
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
          <h1 className='name'>- 박지우 -</h1>
          <h2 className='title'>웹 개발자 포트폴리오</h2>
          <span className='contour'></span>

          <h3 className='Introduction'>
            <TypeIt
              options={{
                speed: 80,
                startDelay: 700,
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
                speed: 80,
                startDelay: 1300,
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
                speed: 80,
                startDelay: 2400,
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
