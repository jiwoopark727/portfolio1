import styled from '@emotion/styled';

const ArchivingWrapper = styled.div`
  height: 70vh;
  background-color: #fff;
  padding-top: 10vh;
  padding-bottom: 10vh;

  .title {
    display: flex;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    padding-top: 80;
  }
`;

const ArchivingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 auto;
  max-width: 1200px;
  justify-items: center;
`;

const ArchivingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 80px;
  font-size: 30px;
  width: 400px;
  height: 250px;
  border-radius: 25px;
  background-color: rgba(51, 112, 255, 0.07);
  cursor: pointer;
`;

const Archiving = () => {
  const openGitHub = () => {
    window.open('https://github.com/jiwoopark727', '_blank'); // 새 창으로 GitHub 열기
  };

  const openBlog = () => {
    window.open('https://devvoo.tistory.com', '_blank'); // 새 창으로 Blog 열기
  };
  return (
    <ArchivingWrapper>
      <div className='title'>Archiving</div>
      <ArchivingContainer>
        <ArchivingBox onClick={openGitHub}>깃허브</ArchivingBox>
        <ArchivingBox onClick={openBlog}>티스토리</ArchivingBox>
      </ArchivingContainer>
    </ArchivingWrapper>
  );
};
export default Archiving;
