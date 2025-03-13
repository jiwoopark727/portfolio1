import styled from '@emotion/styled';
import bannerBg from '../../assets/images/banner_bg.jpg';
import ArrowDown from '../Styled/ArrowDown';

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
    width: 1000px;
    border-bottom: 5px solid black;
  }

  .Introduction {
    display: flex;
    justify-content: center;
    align-items: center;
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
          {/* <span className='contour'></span> */}
          <h3 className='Introduction'>
            안녕하세요.
            <br />
            감각 있는 웹 개발자
            <br />
            박지우입니다.
          </h3>
        </BannerText>

        <ArrowDown onClick={handleArrowClick} />
      </BannerContainer>
    </BannerWrapper>
  );
};
export default Banner;
