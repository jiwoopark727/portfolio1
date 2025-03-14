import styled from '@emotion/styled';

const IntroductionWrapper = styled.div`
  height: 67vh;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  line-height: 1.9;
`;

const Introduction = () => {
  return (
    <IntroductionWrapper>
      소통을 중요시하며, 사용자 친화적인 웹을 개발하고자 노력합니다.
      <br />
      단순한 기능을 넘어, 직관적이고 감각적인 경험을 제공합니다.
      <br />
      저와 함께라면 여러분의 일상이 새로워질 것입니다.
    </IntroductionWrapper>
  );
};
export default Introduction;
