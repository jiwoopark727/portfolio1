import styled from '@emotion/styled';

const FooterContainer = styled.div`
  background-color: #fff;
  padding-top: 50px;
  padding-bottom: 30px;
  height: 280px;
  position: relative;
  transform: translateY(0%);
`;

const FooterInner = styled.div`
  height: 200px;
  padding-left: 67px;
  padding-right: 67px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerText = styled.div`
  font-size: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <InnerText>© 2025. Park Jiwoo Woo. All rights reserved.</InnerText>
      </FooterInner>
    </FooterContainer>
  );
};
export default Footer;
