# 박지우 웹 포트폴리오

<br/>

## 🚀 프로젝트 소개

**Portfolio1**은 박지우라는 사람을 상세히 설명하고 어필하기 위한 웹 포트폴리오 프로젝트입니다.

<br/>

## 🎯 주요 기능

- **헤더(내비게이션 바)**: 헤더에 fixed된 네비게이션 바가 있으며 해당 네비 바에는 로고(PJW)와 밑에 나오는 각종 카테고리 탭을 적어놓았으며 해당 탭 클릭 시 해당 섹션 스크롤 위치로 이동합니다.
- **프로필**: 이름, 생년월일, 위치, 연락처, 이메일, 학력 등의 정보를 제공
- **스킬**: 다룰 줄 아는 여러 스킬들을 아이콘 이미지와 함께 나열
- **아카이빙**: 소스 코드 저장소이자 협업 툴인 제 깃허브 주소와, 공부 및 지식 공유 목적으로 운영하는 티스토리 블로그 주소 제공
- **프로젝트**: 그동안 해왔던 프로젝트들 제목과, 기간, 인원수, 설명, 배포 사이트 및 깃허브 주소, 리드미 파일과 이미지 캐러셀 슬라이드를 제공
- **수상내역**: 수상했던 상들의 정보를 제공 (+ 수료도 포함)
- **자격증**: 정보처리기사 등의 자격증 정보를 제공
- **애니메이션 기능**: 스크롤 애니메이션이 주를 이루고 마우스온 이벤트 또한 제공
- **UI&UX**: 포트폴리오이니만큼 UI를 최대한 깔끔하고 보기 편하게 구성, 스크롤 탑 버튼, 네비게이션 바의 메뉴 탭 클릭 시 해당 섹션 스크롤 이동 기능들을 추가해 UX 향상

<br/>

## 🛠 기술 스택

- **Frontend**: `React`, `TypeScript`, `Vite`, `Emotion`
- **Deployment**: `Vercel`

<br/>

## 🎬 데모 배포 사이트 및 스크린샷

🚀 <a href="https://pjw-portfolio1.vercel.app" target="_blank" rel="noopener noreferrer"><strong>[박지우 포트폴리오 배포 사이트]</strong></a>

<table>
  <tr>
    <td align="center">
      <p><배너 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_banner.png" height="230" alt="배너 화면">
    </td>
    <td align="center">
      <p><소개말 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_intro.png" height="230" alt="소개말 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p><프로필 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_profile.png" height="230" alt="프로필 화면">
    </td>
    <td align="center">
      <p><스킬 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_skills.png" height="230" alt="스킬 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p>아카이빙 화면</p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_archiving.png" height="230" alt="아카이빙 화면">
    </td>
    <td align="center">
      <p><프로젝트 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_project.png" height="230" alt="프로젝트 화면">
    </td>
  </tr>
  <tr>
    <td align="center">
      <p><수상내역 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_awards.png" height="230" alt="수상내역 화면">
    </td>
    <td align="center">
      <p><자격증 화면></p>
      <img src="https://raw.githubusercontent.com/jiwoopark727/portfolio1/main/src/assets/images/portfolio_license.png" height="230" alt="자격증 화면">
    </td>
  </tr>
</table>

<br/>

## 🏗 프로젝트 구조

````plaintext
📦 root
│ 📁 src
│  ├── 📁 assets           # 이미지, 아이콘 등 정적 파일
│  ├── 📁 components       # 재사용 가능한 UI 컴포넌트
│       └── 📁 Layout      # 헤더(네비게이션 바), 푸터 컴포넌트
│       └── 📁 Modal       # 리드미, 이미지 슬라이드 모달 컴포넌트
│       └── 📁 Section     # SPA의 스크롤 위치에 따른 각 섹션 별 컴포넌트
│       └── 📁 Styled      # 스타일 버튼과 같은 컴포넌트
│  ├── 📁 types       # 각 컴포넌트 ref 참조 위한 타입 구조 설정
│  └── 📁 views       # 페이지 단위 컴포넌트(이 프로젝트의 경우에는 하나 뿐)
│

## 🔧 설치 및 실행 방법

```bash
# 레포지토리 클론
git clone [https://github.com/jiwoopark727/portfolio1.git)
cd jobnest

# 패키지 설치
npm install

# 환경 변수 설정 (.env 파일 생성 후 환경 변수 추가)
(생략... 필요시 문의 메일 부탁드립니다)

# 개발 서버 실행
npm run dev
````

<br/>

## 📜 라이선스

본 프로젝트는 **MIT 라이선스**를 따릅니다.
