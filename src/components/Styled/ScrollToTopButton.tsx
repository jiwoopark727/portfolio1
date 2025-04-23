import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { FaArrowUp } from 'react-icons/fa';

const Button = styled.button<{ visible: boolean }>`
  position: fixed;
  bottom: 40px;
  right: 30px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  font-size: 18px;
  display: ${(props) => (props.visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease-in-out;

  &:hover {
    background-color: #555;
  }
`;

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button onClick={scrollToTop} visible={isVisible}>
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
