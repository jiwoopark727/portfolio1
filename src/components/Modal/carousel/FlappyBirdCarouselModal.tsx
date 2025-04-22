import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

type Props = {
  images: string[];
  initialIndex?: number;
  isOpen: boolean;
  onClose: () => void;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5); // 빨간 투명색
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: #fafafa;
  padding: 35px;
  border-radius: 20px;
  width: 800px;
  height: 540px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const ImageContainer = styled.div`
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  height: 400px;
  object-fit: contain;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  button {
    background-color: #fafafa;
    border: none;
    padding: 0 10px;
    font-size: 30px;
    border-radius: 30px;
    cursor: pointer;
  }

  span {
    display: flex;
    align-items: center;
    position: relative;
    top: 4px;
    font-size: 15px;
  }
`;

export const FlappyBirdCarouselModal: React.FC<Props> = ({
  images,
  initialIndex = 0,
  isOpen,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) setCurrentIndex(initialIndex);
  }, [isOpen, initialIndex]);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ImageContainer>
          <Image src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </ImageContainer>
        <ButtonGroup>
          <button onClick={prevImage}>&#8249;</button>
          <span>
            {currentIndex + 1} / {images.length}
          </span>
          <button onClick={nextImage}>&#8250;</button>
        </ButtonGroup>
      </ModalContent>
    </Overlay>
  );
};

export default FlappyBirdCarouselModal;
