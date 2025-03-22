import styled from '@emotion/styled';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectWrapper = styled.div`
  background-color: #f9fafb;
  padding-top: 10vh;
  padding-bottom: 15vh;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 5fr 5fr;
  row-gap: 50px;
  margin: 0 auto;
  max-width: 1600px;
  justify-content: center;
`;

const ProjectBox = styled.div`
  height: 530px;
  width: 650px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #dadada;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding-left: 40px;
  padding-top: 40px;

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
    color: #1e1ef7;
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
      <ProjectContainer>
        {/* 1 */}
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
