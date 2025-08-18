import styled from '@emotion/styled';
import bannerBg from '../../assets/images/banner_bg.jpg';
import ArrowDown from '../Styled/ArrowDown';
import TypeIt from 'typeit-react';
import SplitText from '../../styles/SplitText/SplitText';
import Iridescence from '../../styles/Iridescence/Iridescence';

const BannerWrapper = styled.div`
  position: relative; // 배경과 내용 겹치기 위한 기준
  height: 100vh;
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 200px;
  overflow: hidden;
  color: #fff;
`;

const BannerContainer = styled.div`
  position: relative;
  z-index: 1; // Iridescence 위에 올라가도록
`;

const IridescenceBg = styled(Iridescence)`
  position: absolute !important; // 배경에 고정
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none; // 배경이 클릭 막지 않게
`;

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
    font-size: 45px;
    padding-bottom: 30px;
  }

  .title {
    font-size: 45px;
    padding-bottom: 80px;
  }

  .contour {
    border: 2px solid #fff;
    margin: 10px auto;
    width: 10%;
    margin-bottom: 80px;
  }

  .Introduction {
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    visibility: hidden;
    animation: showText 0.1s 0.5s forwards;
    padding-bottom: 15px;
  }

  .IntroBox {
    height: 8vh;
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
    const goalHeight = document.documentElement.clientHeight - 54;
    window.scrollTo({
      top: goalHeight,
      behavior: 'smooth',
    });
  };

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };
  return (
    <BannerWrapper>
      {/* 배경으로 들어가는 Iridescence */}
      <IridescenceBg
        color={[0.6, 0.7, 0.9]}
        speed={0.8}
        amplitude={0.15}
        mouseReact
      />

      <BannerContainer>
        <BannerText>
          <h1 className='name'>&lt; 박지우 /&gt;</h1>
          <h2 className='title'>
            {' '}
            <SplitText
              text='웹 개발자 포트폴리오'
              className='name'
              delay={100}
              duration={1}
              ease='power3.out'
              splitType='chars'
              from={{ opacity: 0, y: 80 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin='-100px'
              textAlign='center'
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </h2>
          {/* 구분선 */}
          <hr className='contour' />
          <div className=''>
            <h3 className='Introduction'>
              <TypeIt
                options={{
                  speed: 100,
                  startDelay: 1700,
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
                  startDelay: 2600,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              >
                감각적인 웹 개발자
              </TypeIt>
            </h3>
            <h3 className='Introduction'>
              <TypeIt
                options={{
                  speed: 120,
                  startDelay: 4000,
                  waitUntilVisible: true,
                  cursor: false,
                }}
              >
                박지우입니다.
              </TypeIt>
            </h3>
          </div>
        </BannerText>
      </BannerContainer>

      <ArrowDown onClick={handleArrowClick} />
    </BannerWrapper>
  );
};
export default Banner;
