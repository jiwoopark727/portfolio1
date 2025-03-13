import styled from '@emotion/styled';

const ArrowDownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  div {
    transform: rotate(33deg);
  }

  span {
    display: block;
    width: 45px; /* 너비를 조금 조정 */
    height: 40px; /* 높이를 다르게 설정 */
    border-bottom: 6px solid #717171;
    border-right: 6.8px solid #717171;
    transform: skewX(-20deg); /* 🔥 skew를 활용해 120도 각 만들기 */
    animation: animate 4s infinite;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: skewX(-20deg) translate(-30px, -30px);
    }
    25% {
      opacity: 1;
      transform: skewX(-20deg) translate(0px, 0px);
    }
    50% {
      opacity: 1;
      transform: skewX(-20deg) translate(-15px, -15px);
    }
    75% {
      opacity: 1;
      transform: skewX(-20deg) translate(0px, 0px);
    }
    100% {
      opacity: 0;
      transform: skewX(-20deg) translate(-30px, -30px);
    }
  }
`;

const ArrowDown = ({ onClick }: { onClick?: () => void }) => {
  return (
    <ArrowDownContainer onClick={onClick}>
      <div>
        <span></span>
      </div>
    </ArrowDownContainer>
  );
};
export default ArrowDown;
