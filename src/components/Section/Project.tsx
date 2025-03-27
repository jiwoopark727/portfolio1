import styled from '@emotion/styled';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectWrapper = styled.div`
  background-color: #f9fafb;
  padding-top: 10vh;
  padding-bottom: 15vh;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 85px;
    font-size: 50px;
    font-weight: 800;
  }
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  row-gap: 50px;
  margin: 0 auto;
  max-width: 1400px;
  justify-content: center;
`;

const ProjectBox = styled.div`
  height: 600px;
  width: 660px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #dadada;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding: 40px;

  .title {
    width: fit-content;
    padding: 0 12px;
    height: 45px;
    background-color: #4939fc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 21px;
    font-weight: 700;
  }

  .date {
    margin-top: 12px;
    margin-left: 3px;
    font-size: 17px;
    color: #5e5e5e;
  }

  .contour {
    margin-top: 12px;
    margin-bottom: 12px;
    width: 92%;
  }

  .sub_title {
    color: black;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .des {
    font-size: 19px;
    color: black;
    line-height: 1.7;
    margin-bottom: 12px;
  }

  .link {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #f86eef;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 12px;

    span {
      margin-right: 10px;
      font-weight: 1000;
      font-size: 24px;
      cursor: default;
    }
  }

  .stack {
    width: fit-content;
    padding: 0 12px;
    height: 38px;
    background-color: #fff5b7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: 1px solid #ffdd00;
    margin-bottom: 18px;
  }

  .ref {
    max-width: 220px;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 5fr 5fr;

    .readme {
      height: 32px;
      width: fit-content;
      padding: 0 12px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }

    .image {
      height: 32px;
      width: fit-content;
      padding: 0 12px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
    }
  }
`;

const Project = () => {
  const openJobNest = () => {
    window.open('https://job-nest-iota.vercel.app', '_blank'); // 새 창으로 GitHub 열기
  };
  return (
    <ProjectWrapper>
      <div className='title'>Project</div>
      <ProjectContainer>
        {/* 1 */}
        <ProjectBox>
          <div className='title'>부동산 매물 관리 프로젝트</div>
          <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
          <hr className='contour' />
          <div className='sub_title'>
            청년들의 이직과 주거 문제를 동시에 해결하는 일자리 기반
            <br />
            주거 공간 플랫폼
          </div>
          <div className='des'>
            <li>
              Handsontable을 활용한 엑셀 시트 스타일의 매물 관리(CRUD) 시스템
            </li>
            <li>카카오맵 API를 이용한 매물 위치 표시</li>
            <li>OAuth 2.0 으로 Google 로그인 구현</li>
            <li>Google Calendar API와 연동하여 일정 관리</li>
            <li>
              서버와의 통신으로 등기부등본 및 건축물 대장 열람 기능(더미 데이터)
            </li>
            <li>서버와의 통신으로 등기부등본 및 건축물 대장 열람 기능</li>
          </div>
          <div className='link' onClick={openJobNest}>
            <span>| </span>
            <a target='_blank' rel='noopener noreferrer'>
              https://job-nest-iota.vercel.app
            </a>{' '}
          </div>
          <div className='stack'>
            TypeScript, React, Vercel, Redux, TailWind CSS
          </div>
          <div className='ref'>
            <div className='readme'>
              <FontAwesomeIcon
                icon={faReadme}
                style={{ paddingRight: '5px' }}
              />
              README
            </div>
            <div className='image'>
              <FontAwesomeIcon icon={faImage} style={{ paddingRight: '5px' }} />
              이미지
            </div>
          </div>
        </ProjectBox>
        {/* 2 */}
        <ProjectBox>
          <div className='title'>부동산 매물 관리 프로젝트</div>
          <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
          <hr className='contour' />
          <div className='sub_title'>
            공인중개사를 편리하게 해주는 매물 관리 종합 웹사이트
          </div>
          <div className='des'>
            <li>어쩌구저쩌구</li>
            <li>구구절절</li>
            <li>쑥떡쑥떡</li>
            <li>개떡개떡</li>
          </div>
          <div className='link' onClick={openJobNest}>
            <span>| </span>
            <a target='_blank' rel='noopener noreferrer'>
              https://job-nest-iota.vercel.app
            </a>{' '}
          </div>
          <div className='stack'>TypeScript, React, Vercel</div>
          <div className='ref'>
            <div className='readme'>
              <FontAwesomeIcon
                icon={faReadme}
                style={{ paddingRight: '5px' }}
              />
              README
            </div>
            <div className='image'>
              <FontAwesomeIcon icon={faImage} style={{ paddingRight: '5px' }} />
              이미지
            </div>
          </div>
        </ProjectBox>
        {/* 3 */}
        <ProjectBox>
          <div className='title'>부동산 매물 관리 프로젝트</div>
          <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
          <hr className='contour' />
          <div className='sub_title'>
            공인중개사를 편리하게 해주는 매물 관리 종합 웹사이트
          </div>
          <div className='des'>
            <li>어쩌구저쩌구</li>
            <li>구구절절</li>
            <li>쑥떡쑥떡</li>
            <li>개떡개떡</li>
          </div>
          <div className='link' onClick={openJobNest}>
            <span>| </span>
            <a target='_blank' rel='noopener noreferrer'>
              https://job-nest-iota.vercel.app
            </a>{' '}
          </div>
          <div className='stack'>TypeScript, React, Vercel</div>
          <div className='ref'>
            <div className='readme'>
              <FontAwesomeIcon
                icon={faReadme}
                style={{ paddingRight: '5px' }}
              />
              README
            </div>
            <div className='image'>
              <FontAwesomeIcon icon={faImage} style={{ paddingRight: '5px' }} />
              이미지
            </div>
          </div>
        </ProjectBox>
        {/* 4 */}
        <ProjectBox>
          <div className='title'>부동산 매물 관리 프로젝트</div>
          <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
          <hr className='contour' />
          <div className='sub_title'>
            공인중개사를 편리하게 해주는 매물 관리 종합 웹사이트
          </div>
          <div className='des'>
            <li>어쩌구저쩌구</li>
            <li>구구절절</li>
            <li>쑥떡쑥떡</li>
            <li>개떡개떡</li>
          </div>
          <div className='link' onClick={openJobNest}>
            <span>| </span>
            <a target='_blank' rel='noopener noreferrer'>
              https://job-nest-iota.vercel.app
            </a>{' '}
          </div>
          <div className='stack'>TypeScript, React, Vercel</div>
          <div className='ref'>
            <div className='readme'>
              <FontAwesomeIcon
                icon={faReadme}
                style={{ paddingRight: '5px' }}
              />
              README
            </div>
            <div className='image'>
              <FontAwesomeIcon icon={faImage} style={{ paddingRight: '5px' }} />
              이미지
            </div>
          </div>
        </ProjectBox>
      </ProjectContainer>
    </ProjectWrapper>
  );
};
export default Project;
