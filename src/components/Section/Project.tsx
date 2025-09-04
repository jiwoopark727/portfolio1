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
import VendingMachineReadmeModal from '../Modal/readme/VendingMachineReadmeModal.tsx';

import JobNestCarouselModal from '../Modal/carousel/JobNestCarouselModal.tsx';
import FlappyBirdCarouselModal from '../Modal/carousel/FlappyBirdCarouselModal.tsx';
import MemoryBoardCarouselModal from '../Modal/carousel/MemoryBoardCarouselModal.tsx';
import JamCinemaCarouselModal from '../Modal/carousel/JamCinemaCarouselModal.tsx';
import BlogCarouselModal from '../Modal/carousel/BlogCarouselModal.tsx';
import ShopCarouselModal from '../Modal/carousel/ShopCarouselModal.tsx';
import VendingMachineCarouselModal from '../Modal/carousel/VendingMachineCarouselModal.tsx';
import CurrencyExchangeCarouselModal from '../Modal/carousel/CurrencyExchangeCarouselModal.tsx';
import CurrencyExchangeReadmeModal from '../Modal/readme/CurrencyExchangeReadmeModal.tsx';
import Portfolio1ReadmeModal from '../Modal/readme/Portfolio1ReadmeModal.tsx';
import MovieGalleryCarouselModal from '../Modal/carousel/MovieGalleryCarouselModal.tsx';
import MoodifyCarouselModal from '../Modal/carousel/MoodifyCarouselModal.tsx';
import MoodifyReadmeModal from '../Modal/readme/MoodifyReadmeModal.tsx';
import NBHReadmeModal from '../Modal/readme/NBHReadmeModal.tsx';
import NBHCarouselModal from '../Modal/carousel/NBHCarouselModal.tsx';

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

const ProjectWrapper = styled.div`
  background-color: #fff;
  padding-top: 12vh;
  padding-bottom: 15vh;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    font-size: 35px;
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
    margin-bottom: 60px;
    font-size: 16px;

    opacity: 0;
    transition: opacity 1s ease-out, transform 1s ease-out;
    &.visible {
      animation: ${fadeIn} 2s forwards;
    }
  }

  .custom-checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    gap: 5px;
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
  column-gap: 30px;
  row-gap: 30px;
  margin: 0 auto;
  max-width: 1000px;
  justify-content: center;

  opacity: 0;
  transition: opacity 0.5s ease-out, transform 0.5s ease-out;

  &.visible {
    animation: ${slideDown} 0.5s ease-out forwards;
  }
`;

const ProjectBox = styled.div`
  height: 520px;
  width: 560px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #dadada;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding: 30px;

  .p_title {
    width: fit-content;
    padding: 0 10px;
    height: 38px;
    background-color: #4939fc;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  .date {
    margin-top: 8px;
    margin-left: 3px;
    font-size: 14px;
    font-weight: 500;
    color: #5e5e5e;
  }

  .contour {
    margin-top: 7px;
    margin-bottom: 7px;
    width: 98%;
  }

  .sub_title {
    color: black;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .des {
    font-size: 14px;
    color: black;
    line-height: 1.7;
    margin-bottom: 10px;
    list-style-position: outside;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .des li {
    text-indent: 0;
    padding-left: 0.5rem;
    margin-bottom: 3px;
  }

  .link {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #d22bc7;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 12px;
    padding-left: 10px;
    border-left: 4px solid #d22bc7;
  }

  .stack {
    width: fit-content;
    padding: 0px 10px;
    height: 32px;
    background-color: #fff5b7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: 1px solid #ffdd00;
    margin-top: 15px;
    margin-bottom: 12px;
  }

  .ref {
    max-width: 220px;
    display: grid;
    grid-template-columns: 5fr 5fr;

    .readme {
      height: 30px;
      width: fit-content;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
    }

    .image {
      height: 30px;
      width: fit-content;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

const ProjectBox2 = styled.div`
  height: 520px;
  width: 560px;
  background-color: #fff;
  border-radius: 20px;
  border: 2px solid #dadada;
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.15);
  margin: auto;
  padding: 30px;

  .p_title {
    width: fit-content;
    padding: 0 10px;
    height: 38px;
    background-color: #8b8b8b;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
  }

  .date {
    margin-top: 8px;
    margin-left: 3px;
    font-size: 14px;
    font-weight: 500;
    color: #5e5e5e;
  }

  .contour {
    margin-top: 7px;
    margin-bottom: 7px;
    width: 98%;
  }

  .sub_title {
    color: black;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 12px;
  }

  .des {
    font-size: 14px;
    color: black;
    line-height: 1.7;
    margin-bottom: 10px;
    list-style-position: outside;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
  }

  .des li {
    text-indent: 0;
    padding-left: 0.5rem;
    margin-bottom: 3px;
  }

  .link {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #d22bc7;
    text-decoration: none;
    cursor: pointer;
    margin-bottom: 12px;
    padding-left: 10px;
    border-left: 4px solid #d22bc7;
  }

  .stack {
    width: fit-content;
    padding: 0px 10px;
    height: 32px;
    background-color: #fff5b7;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: 1px solid #ffdd00;
    margin-top: 15px;
    margin-bottom: 12px;
  }

  .ref {
    max-width: 220px;
    display: grid;
    grid-template-columns: 5fr 5fr;

    .readme {
      height: 30px;
      width: fit-content;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
      font-weight: bold;
      cursor: pointer;
    }

    .image {
      height: 30px;
      width: fit-content;
      padding: 0 10px;
      border-radius: 5px;
      border: 1px solid #b8b8b8;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 13px;
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
  // const openJamCinema = () => {
  //   window.open('https://memory-page.vercel.app', '_blank');
  // };
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
  const openBlogGH = () => {
    window.open('https://github.com/jiwoopark727/blog', '_blank');
  };
  const openShopGH = () => {
    window.open('https://github.com/jiwoopark727/shoe-store', '_blank');
  };
  const openVendingMachineGH = () => {
    window.open('https://github.com/jiwoopark727/vending-machine', '_blank');
  };
  const openCurrencyExchangeGH = () => {
    window.open('https://github.com/jiwoopark727/currency-exchange', '_blank');
  };
  const openPortfolio = () => {
    window.open('https://pjw-portfolio1.vercel.app/', '_blank');
  };
  const openPortfolioGH = () => {
    window.open('https://github.com/jiwoopark727/portfolio1', '_blank');
  };
  const openMovieGallery = () => {
    window.open('https://movie-gallery-next.vercel.app', '_blank');
  };
  const openMovieGalleryGH = () => {
    window.open('https://github.com/jiwoopark727/movie-gallery-next', '_blank');
  };
  const openMoodify = () => {
    window.open('https://pjw-moodify.vercel.app', '_blank');
  };
  const openMoodifyGH = () => {
    window.open('https://github.com/jiwoopark727/moodify', '_blank');
  };
  const openNBH = () => {
    window.open('https://naeng-bu-hae.vercel.app/', '_blank');
  };
  const openNBHGH = () => {
    window.open('https://github.com/jiwoopark727/naeng-bu-hae', '_blank');
  };

  // 리드미 열고 닫는 state변수와 handle 함수
  const [jobNestReadmeOpen, setJobNestReadmeOpen] = useState(false);
  const [jamCinemaReadmeOpen, setJamCinemaReadmeOpen] = useState(false);
  const [memoryBoardReadmeOpen, setMemoryBoardReadmeOpen] = useState(false);
  const [flappBirdReadmeOpen, setflappyBirdReadmeOpen] = useState(false);
  const [vendingMachineReadmeOpen, setVendingMachineReadmeOpen] =
    useState(false);
  const [currencyExchangeReadmeOpen, setCurrencyExchangeReadmeOpen] =
    useState(false);
  const [portfolio1ReadmeOpen, setPortfolio1ReadmeOpen] = useState(false);
  // const [movieGalleryReadmeOpen, setMovieGalleryReadmeOpen] = useState(false);
  const [moodifyReadmeOpen, setMoodifyReadmeOpen] = useState(false);
  const [NBHReadmeOpen, setNBHReadmeOpen] = useState(false);

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
  const openVendingMachineReadme = () => {
    setVendingMachineReadmeOpen(true);
  };
  const openCurrencyExchangeReadme = () => {
    setCurrencyExchangeReadmeOpen(true);
  };
  const openPortfolio1Readme = () => {
    setPortfolio1ReadmeOpen(true);
  };
  // const openMovieGalleryReadme = () => {
  //   setPortfolio1ReadmeOpen(true);
  // };
  const openMoodifyReadme = () => {
    setMoodifyReadmeOpen(true);
  };
  const openNBHReadme = () => {
    setNBHReadmeOpen(true);
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
  const [isVendingMachineCarouselOpen, setIsVendingMachineCarouselOpen] =
    useState(false);
  const [isCurrencyExchangeCarouselOpen, setIsCurrencyExchangeCarouselOpen] =
    useState(false);
  const [isMovieGalleryCarouselOpen, setIsMovieGalleryCarouselOpen] =
    useState(false);
  const [isMoodifyCarouselOpen, setIsMoodifyCarouselOpen] = useState(false);
  const [isNBHCarouselOpen, setIsNBHCarouselOpen] = useState(false);

  const MemoryBoarddImages = [
    '/assets/images/portfolio_img/memory_board/home.png',
    '/assets/images/portfolio_img/memory_board/dev.png',
    '/assets/images/portfolio_img/memory_board/manual.png',
    '/assets/images/portfolio_img/memory_board/login.png',
    '/assets/images/portfolio_img/memory_board/create.png',
    '/assets/images/portfolio_img/memory_board/board_create.png',
    '/assets/images/portfolio_img/memory_board/board.png',
    '/assets/images/portfolio_img/memory_board/share.png',
    '/assets/images/portfolio_img/memory_board/kakao_share1.png',
    '/assets/images/portfolio_img/memory_board/kakao_share2.png',
    '/assets/images/portfolio_img/memory_board/kakao_share3.png',
    '/assets/images/portfolio_img/memory_board/insta_share.png',
    '/assets/images/portfolio_img/memory_board/memo_create.png',
    '/assets/images/portfolio_img/memory_board/memo_create2.png',
    '/assets/images/portfolio_img/memory_board/memo_create3.png',
    '/assets/images/portfolio_img/memory_board/memo_create4.png',
    '/assets/images/portfolio_img/memory_board/memo1.png',
    '/assets/images/portfolio_img/memory_board/memo2.png',
    '/assets/images/portfolio_img/memory_board/memo3.png',
  ];
  const JamCinemaImages = [
    '/assets/images/portfolio_img/jam_cinema/jamcinema_login_main.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_main2.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_main3.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_signup.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_signup_complete.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_login.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_mypage.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_search.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_movie_info.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_news.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_community.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_post.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_write.png',
    '/assets/images/portfolio_img/jam_cinema/jamcinema_dark.png',
  ];
  const FlappyBirdImages = [
    '/assets/images/portfolio_img/flappy_bird/readme_home.png',
    '/assets/images/portfolio_img/flappy_bird/readme_start.png',
    '/assets/images/portfolio_img/flappy_bird/readme_first.png',
    '/assets/images/portfolio_img/flappy_bird/readme_second.png',
    '/assets/images/portfolio_img/flappy_bird/readme_third.png',
    '/assets/images/portfolio_img/flappy_bird/readme_finish.png',
    '/assets/images/portfolio_img/flappy_bird/readme_board.png',
    '/assets/images/portfolio_img/flappy_bird/readme_board2.png',
  ];
  const JobNestImages = [
    '/assets/images/portfolio_img/job_nest/jobnest_main.png',
    '/assets/images/portfolio_img/job_nest/jobnest_bookmark_manage.png',
    '/assets/images/portfolio_img/job_nest/jobnest_todo.png',
    '/assets/images/portfolio_img/job_nest/jobnest_calendar.png',
    '/assets/images/portfolio_img/job_nest/jobnest_login.png',
    '/assets/images/portfolio_img/job_nest/jobnest_contract.png',
    '/assets/images/portfolio_img/job_nest/jobnest_search.png',
    '/assets/images/portfolio_img/job_nest/jobnest_map.png',
    '/assets/images/portfolio_img/job_nest/jobnest_property.png',
    '/assets/images/portfolio_img/job_nest/jobnest_registration.png',
    '/assets/images/portfolio_img/job_nest/jobnest_registration_ex.png',
  ];
  const BlogImages = [
    '/assets/images/portfolio_img/blog/blog_home.png',
    '/assets/images/portfolio_img/blog/blog_filter.png',
    '/assets/images/portfolio_img/blog/blog_posting.png',
    '/assets/images/portfolio_img/blog/blog_detail.png',
  ];
  const ShopImages = [
    '/assets/images/portfolio_img/shop/shop_home.png',
    '/assets/images/portfolio_img/shop/shop_more.png',
    '/assets/images/portfolio_img/shop/shop_detail.png',
    '/assets/images/portfolio_img/shop/shop_cart.png',
  ];
  const VendingMachineImages = [
    '/assets/images/portfolio_img/vending_machine/VendingMachine_home.png',
    '/assets/images/portfolio_img/vending_machine/VendingMachine_insert_coin.png',
    '/assets/images/portfolio_img/vending_machine/VendingMachine_buy_poomjeol.png',
    '/assets/images/portfolio_img/vending_machine/VendingMachine_admin.png',
    '/assets/images/portfolio_img/vending_machine/VendingMachine_admin_info.png',
    '/assets/images/portfolio_img/vending_machine/VendingMachine_admin_info2.png',
    '/assets/images/portfolio_img/vending_machine/VendingMachine_money.png',
  ];
  const CurrencyExchangeImages = [
    '/assets/images/portfolio_img/currency_exchange/currency_exchange_home.png',
  ];
  const MovieGalleryImages = [
    '/assets/images/portfolio_img/movie_gallery/moviegallery_home.png',
    '/assets/images/portfolio_img/movie_gallery/moviegallery_detail.png',
    '/assets/images/portfolio_img/movie_gallery/moviegallery_credits.png',
    '/assets/images/portfolio_img/movie_gallery/moviegallery_aboutus.png',
  ];
  const MoodifyImages = [
    '/assets/images/portfolio_img/moodify/moodify_home.png',
    '/assets/images/portfolio_img/moodify/moodify_playlist.png',
    '/assets/images/portfolio_img/moodify/moodify_track.png',
    '/assets/images/portfolio_img/moodify/moodify_memo.png',
    '/assets/images/portfolio_img/moodify/moodify_timeline.png',
    '/assets/images/portfolio_img/moodify/moodify_install.png',
  ];
  const NBHImages = [
    '/assets/images/portfolio_img/nbh/nbh_main.png',
    '/assets/images/portfolio_img/nbh/nbh_ingredient.png',
    '/assets/images/portfolio_img/nbh/nbh_recipelist.png',
    '/assets/images/portfolio_img/nbh/nbh_recipedetail.png',
    '/assets/images/portfolio_img/nbh/nbh_recipedetail2.png',
    '/assets/images/portfolio_img/nbh/nbh_mart.png',
    '/assets/images/portfolio_img/nbh/nbh_mart_search.png',
    '/assets/images/portfolio_img/nbh/nbh_mart_cart.png',
    '/assets/images/portfolio_img/nbh/nbh_mart_buy.png',
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
      { threshold: 0.2 }
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
          <div
            ref={containerRef}
            className={isVisible ? 'filter visible' : 'filter'}
          >
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
        <ProjectContainer
          ref={containerRef}
          className={isVisible ? 'visible' : ''}
        >
          {showOnlyMainProject ? (
            // 주요 프로젝트만
            <>
              {/* 11(냉장고를 부탁해-NBH) */}
              <ProjectBox>
                <div className='p_title'>
                  냉장고 속 재료 기반 레시피 추천 플랫폼 - 냉장고를
                  부탁해(N.B.H.)
                </div>
                <div className='date'>2025.7 - 2025.08 (2人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  냉장고 속 재료들로 만들 수 있는 레시피를 추천해주는 하이브리드
                  웹 애플리케이션
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      재료 선택 기능: 체크박스/버튼 기반으로 원하는 재료를 선택
                      , 선택한 재료는 localStorage에 저장되어 유지
                    </li>
                    <li>
                      레시피 추천: 선택한 재료들을 조합하여 API 호출, 해당
                      재료로 만들 수 있는 레시피 목록 제공
                    </li>
                    <li>
                      레시피 상세 페이지: 레시피명, 이미지, 필요한 재료, 조리
                      과정 확인 가능, 관련 YouTube 영상/링크 임베딩
                    </li>
                    <li>
                      UX/UI 최적화: 직관적인 카테고리별 재료 선택 UI 반응형 UI
                      설계로 모바일 브라우저에서도 원활하게 사용 가능
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openNBH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://naeng-bu-hae.vercel.app/ (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openNBHGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/naeng-bu-hae (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  Next.js 15, React, TypeScript, Tailwind CSS, Vercel, next-pwa
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openNBHReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsNBHCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 10(무디파이-Moodify) */}
              <ProjectBox>
                <div className='p_title'>
                  감정 기반 음악 추천 플랫폼 - Moodify
                </div>
                <div className='date'>2025.6 - 2025.07 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  날씨와 감정을 기반으로 음악을 추천해주는 감성 큐레이션
                  웹사이트 + PWA(웹앱)
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      기분과 날씨에 따라 키워드 랜덤 생성 → Spotify/Youtube
                      API로 음악 검색, 감상
                    </li>
                    <li>
                      유저의 감정, 날씨, 메모를 Zustand + LocalStorage로 관리,
                      타임라인에 시각화
                    </li>
                    <li>
                      모바일 친화적 UI: 카드형 UI + Tailwind 기반 반응형 디자인
                    </li>
                    <li>hydration error 해결을 위한 컴포넌트 구조 개선</li>
                    <li>
                      Spotify/Youtube API 통신을 위한 Next.js API Route
                      커스터마이징
                    </li>
                    <li>
                      PWA(Progressive Web App) 지원 → 모바일에 앱처럼 설치 가능
                      <br />
                      → 오프라인 환경에서도 정적 자산 제공 가능
                      <br />→ next-pwa 도입, 서비스 워커 설정 및 캐시 최적화
                      적용
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openMoodify}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://pjw-moodify.vercel.app/ (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openMoodifyGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/moodify (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  Next.js 15, React, TypeScript, Zustand, Tailwind CSS, Vercel,
                  next-pwa
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openMoodifyReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsMoodifyCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 9(포트폴리오 웹사이트) */}
              <ProjectBox>
                <div className='p_title'>박지우 포트폴리오</div>
                <div className='date'>2025.3 - 2025.04 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  자기소개와 프로젝트 경험을 효과적으로 전달하기 위한 웹 기반
                  포트폴리오
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      문서 형태의 이력서보다 웹 인터페이스를 통한 자기 표현이 더
                      적합하다고 판단해 직접 제작
                    </li>
                    <li>
                      시멘틱 태그와 유사한 의미 있는 컴포넌트 구조로 유지보수 및
                      이해가 용이
                    </li>
                    <li>
                      Emotion CSS를 활용해 구조화된 스타일링과 일관성 있는
                      디자인 시스템 구현
                    </li>
                    <li>포트폴리오답게 깔끔하고 직관적인 UI를 중심으로 설계</li>
                    <li>
                      스크롤 애니메이션, 마우스 오버 인터랙션 등 세련된 UX
                      효과를 적용해 지루하지 않은 사용자 경험 제공
                    </li>
                    <li>
                      각 섹션은 스크롤 또는 네비게이션 클릭을 통해 자연스럽게
                      이동하도록 구성
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openPortfolio}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://pjw-portfolio1.vercel.app/ (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openPortfolioGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/portfolio1 (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>React, TypeScript, Vercel, Emotion</div>
                <div className='ref'>
                  <div className='readme' onClick={openPortfolio1Readme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                </div>
              </ProjectBox>
              {/* 8(추억의칠판) */}
              <ProjectBox>
                <div className='p_title'>
                  졸업 기념 온라인 롤링페이퍼 – 추억의칠판
                </div>
                <div className='date'>2024.12 - 2025.02 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  졸업을 기념해 친구들과의 추억을 기록하고 공유하는 하이브리드
                  모바일 웹 프로젝트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      백엔드 2명, 프론트엔드 1명, 디자이너 1명으로 구성된 팀으로
                      개발
                    </li>
                    <li>
                      반응형 웹 + 하이브리드 모바일 앱 UX를 고려한 레이아웃 설계
                    </li>
                    <li>
                      카카오API, 인스타그램API 를 사용해 간편한 sns 공유 기능
                      개발
                    </li>
                    <li>
                      다양한 디자인의 칠판 테마와 메모지로 사용자 맞춤형 꾸미기
                      기능 제공
                    </li>
                    <li>실제 졸업 시즌에 맞춰 실 배포 및 사용자 테스트 완료</li>
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
                  TypeScript, React, Python, Vercel, styled-components, Zustand,
                  MongoDB
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
              {/* 7(잼시네마) */}
              <ProjectBox>
                <div className='p_title'>
                  영화 종합 정보 플랫폼 - Jam Cinema (잼 시네마)
                </div>
                <div className='date'>2024.11 - 2025.03 (2人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  영화 키워드 뉴스부터 커뮤니티 기능까지 제공하는 종합 영화 정보
                  플랫폼
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      영화에 관심 많은 친구와 함께 영화 정보 큐레이션 + 커뮤니티
                      기능을 결합한 웹사이트 개발
                    </li>
                    <li>
                      영화 키워드를 기반으로 Deep Search News API를 연동하여
                      관련 뉴스 리스트 자동 수집
                    </li>
                    <li>
                      MariaDB를 활용해 회원, 커뮤니티 게시글, 뉴스 기사 등
                      데이터를 자체 DB로 관리
                    </li>
                    <li>
                      TMDB API를 활용하여 포스터, 제작사, 배우 등 풍부한 영화
                      정보 제공
                    </li>
                    <li>
                      커뮤니티 페이지 - 업로드 시간·조회수·좋아요 기반 정렬
                      기능, 인기글 배너 구현
                    </li>
                    <li>영화 팬들 간 소통을 위한 게시판 및 댓글 시스템 포함</li>
                    <li>반응형 UI 및 사용자 편의성을 고려한 인터페이스 구현</li>
                  </ul>
                </div>
                {/* <div className='link' onClick={openJamCinema}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://job-nest-iota.vercel.app (배포 사이트)
                  </a>{' '}
                </div> */}
                <div className='link' onClick={openJamCinemaGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/jam-cinema (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, Node.js, React, Redux, Vercel, MariaDB
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
              {/* 6(플래피버드) */}
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
                      Firebase Realtime DB를 사용해 이름,학과, 학번을 입력하여
                      로그인하고 최고 점수 저장 및 리더보드(순위표) 기능
                    </li>
                    <li>
                      파이프는 오른쪽에서 왼쪽으로 이동하며, move_speed로 속도,
                      pipe_seperation으로 출현 간격, pipe_gap으로 상하 간격을
                      조절
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
              {/* 5(잡네스트) */}
              <ProjectBox>
                <div className='p_title'>
                  부동산 매물 관리 프로젝트 - JobNest (잡네스트)
                </div>
                <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  공인중개사를 위한 효율적인 부동산 매물 관리 시스템
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      (주)테라파이와 협업하여 실제 공인중개사의 니즈를 반영한
                      B2B 매물 관리 플랫폼
                    </li>
                    <li>
                      Handsontable을 사용하여 엑셀 시트 스타일의 매물 CRUD 기능
                      구현 (직관적인 입력 및 필터링)
                    </li>
                    <li>
                      카카오맵 API를 통해 매물의 지리적 위치를 지도에 시각화
                    </li>
                    <li>
                      Google OAuth 2.0 로그인 및 Google Calendar API 연동으로
                      중개 일정 및 스케줄 관리 기능 추가
                    </li>
                    <li>
                      사용자가 주소만 입력해도 등기부등본 및 건축물 대장 열람
                      가능 (공공 데이터와 서버 통신 연동)
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
            </>
          ) : (
            // 전체 프로젝트
            <>
              {/* 11(무디파이-Moodify) */}
              <ProjectBox>
                <div className='p_title'>
                  감정 기반 음악 추천 플랫폼 - Moodify
                </div>
                <div className='date'>2025.6 - 2025.07 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  날씨와 감정을 기반으로 음악을 추천해주는 감성 큐레이션
                  웹사이트 + PWA(웹앱)
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      기분과 날씨에 따라 키워드 랜덤 생성 → Spotify/Youtube
                      API로 음악 검색, 감상
                    </li>
                    <li>
                      유저의 감정, 날씨, 메모를 Zustand + LocalStorage로 관리,
                      타임라인에 시각화
                    </li>
                    <li>
                      모바일 친화적 UI: 카드형 UI + Tailwind 기반 반응형 디자인
                    </li>
                    <li>hydration error 해결을 위한 컴포넌트 구조 개선</li>
                    <li>
                      Spotify/Youtube API 통신을 위한 Next.js API Route
                      커스터마이징
                    </li>
                    <li>
                      PWA(Progressive Web App) 지원 → 모바일에 앱처럼 설치 가능
                      <br />
                      → 오프라인 환경에서도 정적 자산 제공 가능
                      <br />→ next-pwa 도입, 서비스 워커 설정 및 캐시 최적화
                      적용
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openMoodify}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://pjw-moodify.vercel.app/ (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openMoodifyGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/moodify (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  Next.js 15, React, TypeScript, Zustand, Tailwind CSS, Vercel,
                  next-pwa
                </div>
                <div className='ref'>
                  <div className='readme' onClick={openMoodifyReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsMoodifyCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox>
              {/* 10(NextJS 영화 갤러리 사이트) */}
              <ProjectBox2>
                <div className='p_title'>
                  영화 갤러리 웹사이트 - Movie Gallery Next
                </div>
                <div className='date'>2025.5 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  Next.js 학습과 체화를 위한 토이 프로젝트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      Next.js App Router 활용: 폴더 기반 라우팅 구조를 활용해
                      페이지를 구조적으로 분리하고 효율적으로 관리
                    </li>
                    <li>
                      비동기 데이터 패칭: fetch와 async/await를 통해 클라이언트
                      사이드에서 외부 API를 비동기적으로 호출하고 데이터를 처리
                    </li>
                    <li>
                      컴포넌트 기반 UI 설계: 재사용 가능한 컴포넌트를 분리,
                      유지보수 용이한 구조 설계
                    </li>
                    <li>
                      CSS Modules 도입: 컴포넌트명.module.css 방식으로 스타일을
                      적용하여, 컴포넌트 단위의 캡슐화된 스타일 관리를 실현 +
                      반응형 css 구현
                    </li>
                    <li>
                      프로젝트 전반을 통해 Next.js와 TypeScript의 사용 경험을
                      체계적으로 정리
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openMovieGallery}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://movie-gallery-next.vercel.app/ (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openMovieGalleryGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/movie-gallery-next (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  NextJS, TypeScript, Vercel, ModuleCSS
                </div>
                <div className='ref'>
                  <div
                    className='image'
                    onClick={() => setIsMovieGalleryCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
              {/* 9(포트폴리오 웹사이트) */}
              <ProjectBox>
                <div className='p_title'>박지우 포트폴리오</div>
                <div className='date'>2025.3 - 2025.04 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  자기소개와 프로젝트 경험을 효과적으로 전달하기 위한 웹 기반
                  포트폴리오
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      문서 형태의 이력서보다 웹 인터페이스를 통한 자기 표현이 더
                      적합하다고 판단해 직접 제작
                    </li>
                    <li>
                      시멘틱 태그와 유사한 의미 있는 컴포넌트 구조로 유지보수 및
                      이해가 용이
                    </li>
                    <li>
                      Emotion CSS를 활용해 구조화된 스타일링과 일관성 있는
                      디자인 시스템 구현
                    </li>
                    <li>포트폴리오답게 깔끔하고 직관적인 UI를 중심으로 설계</li>
                    <li>
                      스크롤 애니메이션, 마우스 오버 인터랙션 등 세련된 UX
                      효과를 적용해 지루하지 않은 사용자 경험 제공
                    </li>
                    <li>
                      각 섹션은 스크롤 또는 네비게이션 클릭을 통해 자연스럽게
                      이동하도록 구성
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openPortfolio}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://pjw-portfolio1.vercel.app/ (배포 사이트)
                  </a>{' '}
                </div>
                <div className='link' onClick={openPortfolioGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/portfolio1 (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>React, TypeScript, Vercel, Emotion</div>
                <div className='ref'>
                  <div className='readme' onClick={openPortfolio1Readme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                </div>
              </ProjectBox>
              {/* 8(추억의칠판) */}
              <ProjectBox>
                <div className='p_title'>
                  졸업 기념 온라인 롤링페이퍼 – 추억의칠판
                </div>
                <div className='date'>2024.12 - 2025.02 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  졸업을 기념해 친구들과의 추억을 기록하고 공유하는 하이브리드
                  모바일 웹 프로젝트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      백엔드 2명, 프론트엔드 1명, 디자이너 1명으로 구성된 팀으로
                      개발
                    </li>
                    <li>
                      반응형 웹 + 하이브리드 모바일 앱 UX를 고려한 레이아웃 설계
                    </li>
                    <li>
                      카카오API, 인스타그램API 를 사용해 간편한 sns 공유 기능
                      개발
                    </li>
                    <li>
                      다양한 디자인의 칠판 테마와 메모지로 사용자 맞춤형 꾸미기
                      기능 제공
                    </li>
                    <li>실제 졸업 시즌에 맞춰 실 배포 및 사용자 테스트 완료</li>
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
                  TypeScript, React, Python, Vercel, styled-components, Zustand,
                  MongoDB
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
              {/* 7(잼시네마) */}
              <ProjectBox>
                <div className='p_title'>
                  영화 종합 정보 플랫폼 - Jam Cinema (잼 시네마)
                </div>
                <div className='date'>2024.11 - 2025.03 (2人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  영화 키워드 뉴스부터 커뮤니티 기능까지 제공하는 종합 영화 정보
                  플랫폼
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      영화에 관심 많은 친구와 함께 영화 정보 큐레이션 + 커뮤니티
                      기능을 결합한 웹사이트 개발
                    </li>
                    <li>
                      영화 키워드를 기반으로 Deep Search News API를 연동하여
                      관련 뉴스 리스트 자동 수집
                    </li>
                    <li>
                      MariaDB를 활용해 회원, 커뮤니티 게시글, 뉴스 기사 등
                      데이터를 자체 DB로 관리
                    </li>
                    <li>
                      TMDB API를 활용하여 포스터, 제작사, 배우 등 풍부한 영화
                      정보 제공
                    </li>
                    <li>
                      커뮤니티 페이지 - 업로드 시간·조회수·좋아요 기반 정렬
                      기능, 인기글 배너 구현
                    </li>
                    <li>영화 팬들 간 소통을 위한 게시판 및 댓글 시스템 포함</li>
                    <li>반응형 UI 및 사용자 편의성을 고려한 인터페이스 구현</li>
                  </ul>
                </div>
                {/* <div className='link' onClick={openJamCinema}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://job-nest-iota.vercel.app (배포 사이트)
                  </a>{' '}
                </div> */}
                <div className='link' onClick={openJamCinemaGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/jam-cinema (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>
                  TypeScript, Node.js, React, Redux, Vercel, MariaDB
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
              {/* 4(리액트 환전 계산기) */}
              <ProjectBox2>
                <div className='p_title'>환전계산기 - Currency Exchange</div>
                <div className='date'>2024.08 (1人 개인 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  해외 여행자들은 위한 환전 계산기 웹 사이트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      해외여행을 갈 때 환전 계산을 해주는 사이트가 있으면 좋겠다
                      생각이 들어 개발
                    </li>
                    <li>
                      사용자가 입력한 금액을 기준으로 환율을 계산하여 결과를
                      표시
                    </li>
                    <li>
                      직관적인 UI를 통해 사용자 입력을 받고 결과를 시각적으로
                      제공
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openCurrencyExchangeGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/currency-exchange.git
                    (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>HTML/CSS, JavaScript</div>
                <div className='ref'>
                  <div className='readme' onClick={openCurrencyExchangeReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsCurrencyExchangeCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
              {/* 6(플래피버드) */}
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
                      Firebase Realtime DB를 사용해 이름,학과, 학번을 입력하여
                      로그인하고 최고 점수 저장 및 리더보드(순위표) 기능
                    </li>
                    <li>
                      파이프는 오른쪽에서 왼쪽으로 이동하며, move_speed로 속도,
                      pipe_seperation으로 출현 간격, pipe_gap으로 상하 간격을
                      조절
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
              {/* 5(잡네스트) */}
              <ProjectBox>
                <div className='p_title'>
                  부동산 매물 관리 프로젝트 - JobNest (잡네스트)
                </div>
                <div className='date'>2024.08 - 2024.09 (4人 팀 프로젝트)</div>
                <hr className='contour' />
                <div className='sub_title'>
                  공인중개사를 위한 효율적인 부동산 매물 관리 시스템
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      (주)테라파이와 협업하여 실제 공인중개사의 니즈를 반영한
                      B2B 매물 관리 플랫폼
                    </li>
                    <li>
                      Handsontable을 사용하여 엑셀 시트 스타일의 매물 CRUD 기능
                      구현 (직관적인 입력 및 필터링)
                    </li>
                    <li>
                      카카오맵 API를 통해 매물의 지리적 위치를 지도에 시각화
                    </li>
                    <li>
                      Google OAuth 2.0 로그인 및 Google Calendar API 연동으로
                      중개 일정 및 스케줄 관리 기능 추가
                    </li>
                    <li>
                      사용자가 주소만 입력해도 등기부등본 및 건축물 대장 열람
                      가능 (공공 데이터와 서버 통신 연동)
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
              {/* 3(자바 웹소켓 자판기) */}
              <ProjectBox2>
                <div className='p_title'>자판기 프로그램 - Vending Machine</div>
                <div className='date'>
                  2024.05 - 2024.06 (1人 개인인 프로젝트)
                </div>
                <hr className='contour' />
                <div className='sub_title'>
                  자바로 구현된 소켓 프로그래밍 기반의 자판기 시뮬레이션
                  프로젝트
                </div>
                <div className='des'>
                  <ul>
                    <li>
                      서버-클라이언트 통신: TCP 소켓을 이용한 양방향 통신 구현
                    </li>
                    <li>
                      자판기 기능 시뮬레이션: 상품 선택, 결제, 잔돈 반환 등의
                      기능 구현
                    </li>
                    <li>
                      서버 측에서 다수의 클라이언트 요청을 처리하기 위한
                      멀티스레딩 구현
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openVendingMachineGH}>
                  <a target='_blank' rel='noopener noreferrer'>
                    https://github.com/jiwoopark727/vending-machine (깃허브)
                  </a>{' '}
                </div>
                <div className='stack'>Java, Socket</div>
                <div className='ref'>
                  <div className='readme' onClick={openVendingMachineReadme}>
                    <FontAwesomeIcon
                      icon={faReadme}
                      style={{ paddingRight: '5px' }}
                    />
                    README
                  </div>
                  <div
                    className='image'
                    onClick={() => setIsVendingMachineCarouselOpen(true)}
                  >
                    <FontAwesomeIcon
                      icon={faImage}
                      style={{ paddingRight: '5px' }}
                    />
                    이미지
                  </div>
                </div>
              </ProjectBox2>
              {/* 2(리액트 신발 쇼핑몰) */}
              <ProjectBox2>
                <div className='p_title'>신발 쇼핑몰 - Shoe Marker</div>
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
                    <li>localstorage를 활용한 최근 본 상품 기능 구현</li>
                    <li>
                      useMemo, useTransitoin, useDeferredValue 활용한 성능 개선
                    </li>
                  </ul>
                </div>
                <div className='link' onClick={openShopGH}>
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
              {/* 1(리액트 블로그) */}
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
                    <li>블로그 글 CRUD 기능 구현</li>
                  </ul>
                </div>
                <div className='link' onClick={openBlogGH}>
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
            </>
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
        <VendingMachineReadmeModal
          isOpen={vendingMachineReadmeOpen}
          onClose={() => setVendingMachineReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/vending-machine/main/README.md'
        />
        <CurrencyExchangeReadmeModal
          isOpen={currencyExchangeReadmeOpen}
          onClose={() => setCurrencyExchangeReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/currency-exchange/main/README.md'
        />
        <Portfolio1ReadmeModal
          isOpen={portfolio1ReadmeOpen}
          onClose={() => setPortfolio1ReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/README.md'
        />
        <MoodifyReadmeModal
          isOpen={moodifyReadmeOpen}
          onClose={() => setMoodifyReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/moodify/main/README.md'
        />
        <NBHReadmeModal
          isOpen={NBHReadmeOpen}
          onClose={() => setNBHReadmeOpen(false)}
          readmeUrl='https://raw.githubusercontent.com/jiwoopark727/naeng-bu-hae/main/README.md'
        />
      </>
      {/* 이미지 캐러셀 */}
      <>
        <NBHCarouselModal
          images={NBHImages}
          isOpen={isNBHCarouselOpen}
          onClose={() => setIsNBHCarouselOpen(false)}
        />
        <MoodifyCarouselModal
          images={MoodifyImages}
          isOpen={isMoodifyCarouselOpen}
          onClose={() => setIsMoodifyCarouselOpen(false)}
        />
        <MovieGalleryCarouselModal
          images={MovieGalleryImages}
          isOpen={isMovieGalleryCarouselOpen}
          onClose={() => setIsMovieGalleryCarouselOpen(false)}
        />
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
        <VendingMachineCarouselModal
          images={VendingMachineImages}
          isOpen={isVendingMachineCarouselOpen}
          onClose={() => setIsVendingMachineCarouselOpen(false)}
        />
        <CurrencyExchangeCarouselModal
          images={CurrencyExchangeImages}
          isOpen={isCurrencyExchangeCarouselOpen}
          onClose={() => setIsCurrencyExchangeCarouselOpen(false)}
        />
      </>
    </>
  );
};
export default Project;
