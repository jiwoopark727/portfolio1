import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';
import { keyframes } from '@emotion/react';
import { faReadme } from '@fortawesome/free-brands-svg-icons';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import JobNestReadmeModal from '../Modal/readme/JobNestReadmeModal.tsx';
import JamCinemaReadmeModal from '../Modal/readme/JamCinemaReadmeModal.tsx';
import MemoryBoardReadmeModal from '../Modal/readme/MemoryBoardReadmeModal.tsx';
import FlappyBirdReadmeModal from '../Modal/readme/FlappyBirdReadmeModal.tsx';
import JobNestCarouselModal from '../Modal/carousel/JobNestCarouselModal.tsx';
import FlappyBirdCarouselModal from '../Modal/carousel/FlappyBirdCarouselModal.tsx';
import MemoryBoardCarouselModal from '../Modal/carousel/MemoryBoardCarouselModal.tsx';
import JamCinemaCarouselModal from '../Modal/carousel/JamCinemaCarouselModal.tsx';
import BlogCarouselModal from '../Modal/carousel/BlogCarouselModal.tsx';
import ShopCarouselModal from '../Modal/carousel/ShopCarouselModal.tsx';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ProjectWrapper = styled.div`
  background-color: #fff;
  padding-top: 10vh;
  padding-bottom: 15vh;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 55px;
    font-size: 50px;
    font-weight: 800;

    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    &.visible {
      animation: ${fadeIn} 2s forwards;
    }
  }

  .filter {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    font-size: 20px;
  }

  .custom-checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    gap: 8px;
  }

  .custom-checkbox input {
    display: none; /* 기본 체크박스 숨기기 */
  }

  .checkmark {
    width: 24px;
    height: 24px;
    border: 2px solid #333;
    background-color: white;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    border-radius: 5px;
  }

  .custom-checkbox input:checked + .checkmark {
    background-color: #4939fc;
    border-color: #4939fc;
    border-radius: 5px;
  }

  .custom-checkbox input:checked + .checkmark::after {
    content: '';
    position: absolute;
    left: 6px;
    top: 1px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
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
  height: 680px;
  width: 660px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #dadada;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding: 40px;

  .p_title {
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
    margin-bottom: 16px;
    list-style-position: outside;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .des li {
    text-indent: 0;
    padding-left: 0.5rem;
    margin-bottom: 4px;
  }

  .link {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #d22bc7;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 5px solid #d22bc7;
  }

  .stack {
    width: fit-content;
    padding: 3px 18px 3px 18px;
    height: 42px;
    background-color: #fff5b7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: 1px solid #ffdd00;
    margin-bottom: 20px;
  }

  .ref {
    max-width: 220px;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 5fr 5fr;

    .readme {
      height: 36px;
      width: fit-content;
      padding: 0 12px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
    }

    .image {
      height: 36px;
      width: fit-content;
      padding: 0 12px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const ProjectBox2 = styled.div`
  height: 600px;
  width: 660px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #dadada;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding: 40px;

  .p_title {
    width: fit-content;
    padding: 0 12px;
    height: 45px;
    background-color: gray;
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
    margin-bottom: 16px;
    list-style-position: outside;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .des li {
    text-indent: 0;
    padding-left: 0.5rem;
    margin-bottom: 4px;
  }

  .link {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #d22bc7;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 5px solid #d22bc7;
  }

  .stack {
    width: fit-content;
    padding: 3px 18px 3px 18px;
    height: 42px;
    background-color: #fff5b7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: 1px solid #ffdd00;
    margin-bottom: 20px;
  }

  .ref {
    max-width: 220px;
    display: grid;
    column-gap: 10px;
    grid-template-columns: 5fr 5fr;

    .readme {
      height: 36px;
      width: fit-content;
      padding: 0 12px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
    }

    .image {
      height: 36px;
      width: fit-content;
      padding: 0 12px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const Project = () => {
  const [showOnlyMainProject, setShowOnlyMainProject] = useState(true);

  // 배포사이트&깃헙 페이지 새탭에서 열어주는 함수
  const openJobNest = () => {
    window.open('https://job-nest-iota.vercel.app', '_blank');
  };
  const openJobNestGH = () => {
    window.open('https://github.com/jiwoopark727/job-nest', '_blank');
  };
  const openJamCinema = () => {
    window.open('https://memory-page.vercel.app', '_blank');
  };
  const openJamCinemaGH = () => {
    window.open('https://github.com/jiwoopark727/jam-cinema', '_blank');
  };
  const openMemoryBoard = () => {
    window.open('https://memory-page.vercel.app', '_blank');
  };
  const openMemoryBoardGH = () => {
    window.open('https://github.com/jiwoopark727/memory-board', '_blank');
  };
  const openFlappyBird = () => {
    window.open('https://flappy-bird-jiwoo-park.vercel.app/', '_blank');
  };
  const openFlappyBirdGH = () => {
    window.open('https://github.com/jiwoopark727/flappy-bird', '_blank');
  };

  // 리드미 열고 닫는 state변수와 handle 함수
  const [jobNestReadmeOpen, setJobNestReadmeOpen] = useState(false);
  const [jamCinemaReadmeOpen, setJamCinemaReadmeOpen] = useState(false);
  const [memoryBoardReadmeOpen, setMemoryBoardReadmeOpen] = useState(false);
  const [flappBirdReadmeOpen, setflappyBirdReadmeOpen] = useState(false);
  const openJobNestReadme = () => {
    setJobNestReadmeOpen(true);
  };
  const openJamCinemaReadme = () => {
    setJamCinemaReadmeOpen(true);
  };
  const openMemoryBoardReadme = () => {
    setMemoryBoardReadmeOpen(true);
  };
  const openflappyBirdReadme = () => {
    setflappyBirdReadmeOpen(true);
  };

  // 이미지 버튼 캐러셀 슬라이드 부분
  const [isMemoryBoardCarouselOpen, setIsMemoryBoardCarouselOpen] =
    useState(false);
  const [isJamCinemaCarouselOpen, setIsJamCinemaCarouselOpen] = useState(false);
  const [isFlappyBirdCarouselOpen, setIsFlappyBirdCarouselOpen] =
    useState(false);
  const [isJobNestCarouselOpen, setIsJobNestCarouselOpen] = useState(false);
  const [isBlogCarouselOpen, setIsBlogCarouselOpen] = useState(false);
  const [isShopCarouselOpen, setIsShopCarouselOpen] = useState(false);

  const MemoryBoarddImages = [
    'src/assets/images/portfolio_img/memory_board/home.png',
    'src/assets/images/portfolio_img/memory_board/dev.png',
    'src/assets/images/portfolio_img/memory_board/manual.png',
    'src/assets/images/portfolio_img/memory_board/login.png',
    'src/assets/images/portfolio_img/memory_board/create.png',
    'src/assets/images/portfolio_img/memory_board/board_create.png',
    'src/assets/images/portfolio_img/memory_board/board.png',
    'src/assets/images/portfolio_img/memory_board/share.png',
    'src/assets/images/portfolio_img/memory_board/kakao_share1.png',
    'src/assets/images/portfolio_img/memory_board/kakao_share2.png',
    'src/assets/images/portfolio_img/memory_board/kakao_share3.png',
    'src/assets/images/portfolio_img/memory_board/insta_share.png',
    'src/assets/images/portfolio_img/memory_board/memo_create.png',
    'src/assets/images/portfolio_img/memory_board/memo_create2.png',
    'src/assets/images/portfolio_img/memory_board/memo_create3.png',
    'src/assets/images/portfolio_img/memory_board/memo_create4.png',
    'src/assets/images/portfolio_img/memory_board/memo1.png',
    'src/assets/images/portfolio_img/memory_board/memo2.png',
    'src/assets/images/portfolio_img/memory_board/memo3.png',
  ];
  const JamCinemaImages = [
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_login_main.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_main2.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_main3.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_signup.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_signup_complete.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_login.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_mypage.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_search.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_movie_info.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_news.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_community.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_post.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_write.png',
    'src/assets/images/portfolio_img/jam_cinema/jamcinema_dark.png',
  ];
  const FlappyBirdImages = [
    'src/assets/images/portfolio_img/flappy_bird/readme_home.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_start.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_first.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_second.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_third.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_finish.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_board.png',
    'src/assets/images/portfolio_img/flappy_bird/readme_board2.png',
  ];
  const JobNestImages = [
    'src/assets/images/portfolio_img/job_nest/jobnest_main.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_bookmark_manage.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_todo.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_calendar.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_login.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_contract.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_search.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_map.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_property.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_registration.png',
    'src/assets/images/portfolio_img/job_nest/jobnest_registration_ex.png',
  ];
  const BlogImages = [
    'src/assets/images/portfolio_img/blog/blog_home.png',
    'src/assets/images/portfolio_img/blog/blog_filter.png',
    'src/assets/images/portfolio_img/blog/blog_posting.png',
    'src/assets/images/portfolio_img/blog/blog_detail.png',
  ];
  const ShopImages = [
    'src/assets/images/portfolio_img/shop/shop_home.png',
    'src/assets/images/portfolio_img/shop/shop_more.png',
    'src/assets/images/portfolio_img/shop/shop_detail.png',
    'src/assets/images/portfolio_img/shop/shop_cart.png',
  ];

  // 화면에 등장 시 애니메이션 동작 부분(IntersectionObserver)
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.9 }
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
    <>
      <ProjectWrapper>
        {/* 제목과 주요 프로젝트 체크박스 */}
        <>
          <div
            ref={containerRef}
            className={isVisible ? 'title visible' : 'title'}
          >
            Project
          </div>
          <div className='filter'>
            <label className='custom-checkbox'>
              주요 프로젝트만 보기
              <input
                type='checkbox'
                onChange={(e) => setShowOnlyMainProject(e.target.checked)}
                checked={showOnlyMainProject}
              />
              <span className='checkmark'></span>
            </label>
          </div>
        </>
        <ProjectContainer>
          {showOnlyMainProject ? (
            <>
              {/* 1(추억의칠판) */}
              <ProjectBox>
                <div className='p_title'>
                  졸업 기념 온라인 롤링페이퍼 - 추억의칠판
                </div>
                <div className='date'>2024.12 - 2025.02 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  졸업을 기념하여 제작한 서로에게 롤링페이퍼를 작성하여 추억을
                  공유하는 모바일웹 사이트 - 실배포 프로젝트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      대학교 동문 백엔드 개발자 두 명과 프론트 개발자 한 명과
                      졸업을 기념하고 추억을 남기기 위해 직접 개발
                    </li>
                    <li>모바일웹 기반 웹 사이트로 반응형으로 개발</li>
                    <li>
                      카카오API, 인스타그램API 를 사용해 간편한 sns 공유 기능
                      개발하여 홍보 효과 극대화
                    </li>
                    <li>
                      다양한 칠판 디자인과 메모지 디자인으로 다양성과 개성의
                      요소 추가
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openMemoryBoard}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://memory-page.vercel.app (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openMemoryBoardGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/memory-board (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, React, Python, Vercel, styled-components, Zustand
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openMemoryBoardReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsMemoryBoardCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 2(잼시네마) */}
              <ProjectBox>
                <div className='p_title'>
                  영화 종합 정보 플랫폼 - Jam Cinema (잼 시네마)
                </div>
                <div className='date'>2024.11 - 2025.03 (2人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  영화 관련 정보들과 영화 매니아들의 소통 창구를 제공하는
                  웹사이트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      영화를 좋아하는 친구와 함께 영화 관련 정보를 한 눈에
                      보고자 직접 개발
                    </li>
                    <li>
                      Deep Search News API를 사용하여 영화 키워드 뉴스 리스트업
                    </li>
                    <li>
                      MariaDB를 사용하여 자체 DB로 데이터(회원, 커뮤니티,
                      뉴스)관리
                    </li>
                    <li>
                      TMDB API를 활용한 포스터, 제작사, 배우, 관련영상 등의
                      다양한 영화 정보 제공
                    </li>
                    <li>
                      방문/조회 수, 업로드 시간 등으로 최신게시글 및 인기게시글
                      분류 배너 커뮤니티 기능 개발
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openJamCinema}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://job-nest-iota.vercel.app (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openJamCinemaGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/jam-cinema (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, Node.js, React, Redux, Vercel
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openJamCinemaReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsJamCinemaCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 3(플래피버드) */}
              <ProjectBox>
                <div className='p_title'>Flappy Bird - 웹 버전 게임</div>
                <div className='date'>
                  2024.10 (1인 게임 개발 경진대회 프로젝트)
                </div>
                <hr className='contour' />
                <div className='sub_title'>
                  모바일 게임 Flappy Bird의 모작을 커스텀하여 웹 버전으로 개발
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      게임 개발 경진대회에 출품작으로 기존의 모바일 게임을
                      저만의 방식으로 개성을 살려 커스텀하여 웹 버전으로 개발
                    </li>
                    <li>
                      Firebase Realtime DB를 사용해 이름,학과, 학번을 입력하여
                      로그인하고 최고 점수 저장 및 리더보드(순위표) 기능
                    </li>
                    <li>
                      파이프는 오른쪽에서 왼쪽으로 이동하며, move_speed로 속도,
                      pipe_seperation으로 출현 간격, pipe_gap으로 상하 간격을
                      조절한다.
                    </li>
                    <li>
                      음향효과와 배경 이미지 변경 단조로운 게임 방식에 재미 요소
                      추가
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openFlappyBird}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://flappy-bird-jiwoo-park.vercel.app (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openFlappyBirdGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/flappy-bird (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  HTML/CSS, JavaScript, Firebase, Vercel
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openflappyBirdReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsFlappyBirdCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 4(잡네스트) */}
              <ProjectBox>
                <div className='p_title'>
                  부동산 매물 관리 프로젝트 - JobNest (잡네스트)
                </div>
                <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  공인중개사들을 위한 부동산 매물 관리 플랫폼 웹사이트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      공인중개사이셨던 부모님을 통해 알게 된 낙후된 홈페이지들로
                      인한 공인중개사들의 불편함을 해소하고자 직접 개발
                    </li>
                    <li>
                      Handsontable을 활용한 엑셀 시트 스타일의 매물 관리(CRUD)
                      시스템
                    </li>
                    <li>카카오맵 API를 이용한 매물 위치 표시</li>
                    <li>OAuth 2.0 으로 Google 로그인 구현</li>
                    <li>Google Calendar API와 연동하여 일정 관리</li>
                    <li>
                      서버와의 통신으로 등기부등본 및 건축물 대장 열람 기능(더미
                      데이터)
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openJobNest}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://job-nest-iota.vercel.app (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openJobNestGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/job-nest (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, React, Vercel, Redux, TailWind CSS
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openJobNestReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsJobNestCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 5(리액트 블로그) */}
              <ProjectBox2>
                <div className='p_title'>나만의 블로그</div>
                <div className='date'>2024.04 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  리액트를 처음 공부하면서 개발했던 블로그
                </div>
                <div className='des'>
                  <ul>
                    <li>state 변수를 활용하여 button 기능 개발</li>
                    <li>모달창 동적인 UI로 구현</li>
                    <li>props로 부모 컴포넌트의 state 가져오기</li>
                    <li>OAuth 2.0 으로 Google 로그인 구현</li>
                    <li>블로그 글 CRUD 기능 구현</li>
                  </ul>
                </div>
                <div className='link' onClick={openJobNestGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/blog (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>React, Redux</div>
                <div className='ref'>
                  <div
                    className='image'
                    onClick={() => setIsBlogCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
              {/* 6(리액트 신발 쇼핑몰) */}
              <ProjectBox2>
                <div className='p_title'>리액트 신발 쇼핑몰</div>
                <div className='date'>
                  2024.04 - 2024.05 (1人 개인 프로젝트)
                </div>
                <hr className='contour' />
                <div className='sub_title'>
                  리액트 공부를 하면서 개발한 두번째 프로젝트
                </div>
                <div className='des'>
                  <ul>
                    <li>AJAX를 이용한 서버 통신</li>
                    <li>transition을 사용하여 컴포넌트 전환 애니메이션 구현</li>
                    <li>Context API, Redux를 활용한 전역 상태관리</li>
                    <li>object/array state로 장바구니 기능 구현</li>
                    <li>localstorage를 활용한 최근 본 상품 기능 구현</li>
                    <li>
                      useMemo, useTransitoin, useDeferredValue을 활용한 성능개선
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openJobNestGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/shoe-store (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>React, Redux, Context API</div>
                <div className='ref'>
                  <div
                    className='image'
                    onClick={() => setIsShopCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
              {/* 7(자바 웹소켓 자판기) */}
              <ProjectBox2>
                <div className='p_title'>
                  부동산 매물 관리 프로젝트 - JobNest (잡네스트)
                </div>
                <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  공인중개사들을 위한 부동산 매물 관리 플랫폼 웹사이트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      공인중개사이셨던 부모님을 통해 알게 된 낙후된 홈페이지들로
                      인한 공인중개사들의 불편함을 해소하고자 직접 개발
                    </li>
                    <li>
                      Handsontable을 활용한 엑셀 시트 스타일의 매물 관리(CRUD)
                      시스템
                    </li>
                    <li>카카오맵 API를 이용한 매물 위치 표시</li>
                    <li>OAuth 2.0 으로 Google 로그인 구현</li>
                    <li>Google Calendar API와 연동하여 일정 관리</li>
                    <li>
                      서버와의 통신으로 등기부등본 및 건축물 대장 열람 기능(더미
                      데이터)
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openJobNest}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://job-nest-iota.vercel.app (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openJobNestGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/job-nest (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, React, Vercel, Redux, TailWind CSS
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openJobNestReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsJobNestCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
              {/* 8(리액트 환전 계산기) */}
              <ProjectBox2>
                <div className='p_title'>
                  부동산 매물 관리 프로젝트 - JobNest (잡네스트)
                </div>
                <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  공인중개사들을 위한 부동산 매물 관리 플랫폼 웹사이트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      공인중개사이셨던 부모님을 통해 알게 된 낙후된 홈페이지들로
                      인한 공인중개사들의 불편함을 해소하고자 직접 개발
                    </li>
                    <li>
                      Handsontable을 활용한 엑셀 시트 스타일의 매물 관리(CRUD)
                      시스템
                    </li>
                    <li>카카오맵 API를 이용한 매물 위치 표시</li>
                    <li>OAuth 2.0 으로 Google 로그인 구현</li>
                    <li>Google Calendar API와 연동하여 일정 관리</li>
                    <li>
                      서버와의 통신으로 등기부등본 및 건축물 대장 열람 기능(더미
                      데이터)
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openJobNest}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://job-nest-iota.vercel.app (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openJobNestGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/job-nest (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, React, Vercel, Redux, TailWind CSS
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openJobNestReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsJobNestCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
            </>
          ) : (
            <></>
          )}
        </ProjectContainer>
      </ProjectWrapper>
      {/* 리드미 모달창 */}
      <>
        <JobNestReadmeModal
          isOpen={jobNestReadmeOpen}
          onClose={() => setJobNestReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/job-nest/main/README.md'
        />
        <JamCinemaReadmeModal
          isOpen={jamCinemaReadmeOpen}
          onClose={() => setJamCinemaReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/jam-cinema/main/README.md'
        />
        <MemoryBoardReadmeModal
          isOpen={memoryBoardReadmeOpen}
          onClose={() => setMemoryBoardReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/memory-board/main/README.md'
        />
        <FlappyBirdReadmeModal
          isOpen={flappBirdReadmeOpen}
          onClose={() => setflappyBirdReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/flappy-bird/main/README.md'
        />
      </>
      {/* 이미지 캐러셀 */}
      <>
        <MemoryBoardCarouselModal
          images={MemoryBoarddImages}
          isOpen={isMemoryBoardCarouselOpen}
          onClose={() => setIsMemoryBoardCarouselOpen(false)}
        />
        <JamCinemaCarouselModal
          images={JamCinemaImages}
          isOpen={isJamCinemaCarouselOpen}
          onClose={() => setIsJamCinemaCarouselOpen(false)}
        />
        <FlappyBirdCarouselModal
          images={FlappyBirdImages}
          isOpen={isFlappyBirdCarouselOpen}
          onClose={() => setIsFlappyBirdCarouselOpen(false)}
        />
        <JobNestCarouselModal
          images={JobNestImages}
          isOpen={isJobNestCarouselOpen}
          onClose={() => setIsJobNestCarouselOpen(false)}
        />
        <BlogCarouselModal
          images={BlogImages}
          isOpen={isBlogCarouselOpen}
          onClose={() => setIsBlogCarouselOpen(false)}
        />
        <ShopCarouselModal
          images={ShopImages}
          isOpen={isShopCarouselOpen}
          onClose={() => setIsShopCarouselOpen(false)}
        />
      </>
    </>
  );
};
export default Project;
