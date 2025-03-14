import styled from '@emotion/styled';
import {
  faCalendar,
  faEnvelope,
  faLocationDot,
  faMobile,
  faPencil,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutMeWrapper = styled.div`
  height: 54vh;
  background-color: #fff;
  margin-top: 28vh;
  margin-bottom: 150px;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 70px;
    font-size: 40px;
    font-weight: 900;
  }
`;
const AboutMeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 200px;
  row-gap: 100px;
  max-width: 1450px;
  margin: 0 auto;
`;

const AboutMeBox = styled.div`
  width: 340px;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 10px;
  padding: 20px;
  text-align: center;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
`;

const ItemIcon = styled.div`
  font-size: 42px;
  padding-left: 10px;
  padding-right: 30px;
  color: #4a4a4a;
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  .subject {
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 5px;
  }

  .content {
    font-size: 20px;
    color: gray;
  }
`;

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <div className='title'>자기소개</div>
      <AboutMeContainer>
        {/* 이름 */}
        <AboutMeBox>
          <ItemIcon>
            <FontAwesomeIcon icon={faUser} />
          </ItemIcon>
          <ItemText>
            <span className='subject'>이름</span>
            <span className='content'>박지우</span>
          </ItemText>
        </AboutMeBox>
        {/* 생년월일 */}
        <AboutMeBox>
          <ItemIcon>
            <FontAwesomeIcon icon={faCalendar} />
          </ItemIcon>
          <ItemText>
            <span className='subject'>생년월일</span>
            <span className='content'>1999.07.27</span>
          </ItemText>
        </AboutMeBox>
        {/* 위치 */}
        <AboutMeBox>
          <ItemIcon>
            <FontAwesomeIcon icon={faLocationDot} />
          </ItemIcon>
          <ItemText>
            <span className='subject'>위치</span>
            <span className='content'>경기도 부천시</span>
          </ItemText>
        </AboutMeBox>
        {/* 연락처 */}
        <AboutMeBox>
          <ItemIcon>
            <FontAwesomeIcon icon={faMobile} />
          </ItemIcon>
          <ItemText>
            <span className='subject'>연락처</span>
            <span className='content'>010-8646-1362</span>
          </ItemText>
        </AboutMeBox>
        {/* 이메일 */}
        <AboutMeBox>
          <ItemIcon>
            <FontAwesomeIcon icon={faEnvelope} />
          </ItemIcon>
          <ItemText>
            <span className='subject'>이메일</span>
            <span className='content'>jiwoo727@naver.com</span>
          </ItemText>
        </AboutMeBox>
        {/* 학력 */}
        <AboutMeBox>
          <ItemIcon>
            <FontAwesomeIcon icon={faPencil} />
          </ItemIcon>
          <ItemText>
            <span className='subject'>학력</span>
            <span className='content'>
              순천향대학교(컴퓨터소프트웨어공학과(SW융합학부))
            </span>
          </ItemText>
        </AboutMeBox>
      </AboutMeContainer>
    </AboutMeWrapper>
  );
};
export default AboutMe;
