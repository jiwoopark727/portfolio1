import styled from '@emotion/styled';

const ArrowDownContainer = styled.div`
  display: flex;
  height: 10dvh;
  width: 80px;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 1px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;

  div {
    transform: rotate(33deg);
  }

  span {
    display: block;
    width: 35px;
    height: 31.5px;
    border-bottom: 6px solid #fff;
    border-right: 6.8px solid #fff;
    transform: skewX(-20deg);
    animation: animate 3.5s infinite;
  }

  @keyframes animate {
    0% {
      opacity: 0;
      transform: skewX(-20deg) translate(-40px, -40px);
    }
    25% {
      opacity: 1;
      transform: skewX(-20deg) translate(0px, 0px);
    }
    50% {
      opacity: 1;
      transform: skewX(-20deg) translate(-20px, -20px);
    }
    75% {
      opacity: 1;
      transform: skewX(-20deg) translate(0px, 0px);
    }
    100% {
      opacity: 0;
      transform: skewX(-20deg) translate(-40px, -40px);
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
