import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import styled from '@emotion/styled';

interface ReadmeModalProps {
  isOpen: boolean;
  onClose: () => void;
  readmeUrl: string;
}

const ModalWrapper = styled.div`
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: #fafafa;
  max-width: 1150px;
  max-height: 85vh;
  padding: 50px;
  overflow-y: scroll;
  font-size: 22px;
`;

const VendingMachineReadmeModal: React.FC<ReadmeModalProps> = ({
  isOpen,
  onClose,
  readmeUrl,
}) => {
  const [markdown, setMarkdown] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      fetch(readmeUrl)
        .then((res) => res.text())
        .then(setMarkdown)
        .catch(console.error);
    }
  }, [isOpen, readmeUrl]);

  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </ModalContent>
    </ModalWrapper>
  );
};

export default VendingMachineReadmeModal;
