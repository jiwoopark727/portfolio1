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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  background: #fafafa;
  padding: 20px;
  border-radius: 20px;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const ImageContainer = styled.div`
  width: 1050px;
  height: 620px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 16px;

  button {
    background: #eee;
    border: none;
    padding: 0px 16px;
    font-size: 52px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #ddd;
    }
  }

  span {
    display: flex;
    align-items: center;
    font-size: 20px;
  }
`;

export const ShopCarouselModal: React.FC<Props> = ({
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

export default ShopCarouselModal;
