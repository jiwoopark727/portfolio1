import styled from '@emotion/styled';
import bannerBg from '../../assets/images/banner_bg.jpg';

const BannerWrapper = styled.div`
  height: 100vh;
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Banner = () => {
  return <BannerWrapper></BannerWrapper>;
};
export default Banner;
