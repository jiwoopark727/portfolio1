import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

const NavbarWrapper = styled.div<{ scrolled: boolean }>`
  height: 70px;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: ${(props) =>
    props.scrolled
      ? '1px solid lightgray'
      : 'none'}; /* 스크롤에 따라 밑줄 추가 */
`;

const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  margin: auto;
`;

const NavbarInner = styled.div`
  width: 92%;
  height: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 900;
`;

const NavbarContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px; /* 메뉴 간격 */
  margin: 0;
  color: #4e5968;
  z-index: 10;
`;

const MenuItem = styled.li`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 14px 10px 14px 10px;
  border-radius: 8px;
  z-index: 100;
  &:hover {
    background-color: #efefef;
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarWrapper scrolled={scrolled}>
      <NavbarContainer>
        <NavbarInner>
          <Logo>PJW</Logo>
          <NavbarContent>
            <Menu>
              <MenuItem>프로필</MenuItem>
              <MenuItem>스킬</MenuItem>
              <MenuItem>아카이빙</MenuItem>
              <MenuItem>프로젝트</MenuItem>
              <MenuItem>커리어</MenuItem>
              <MenuItem>수상내역</MenuItem>
              <MenuItem>자격증</MenuItem>
            </Menu>
          </NavbarContent>
        </NavbarInner>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
export default Navbar;
