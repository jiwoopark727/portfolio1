import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { SectionRefs } from '../../types/types.ts';
import GradientText from '../../styles/GradientText/GradientText.tsx';

const NavbarWrapper = styled.div<{ scrolled: boolean }>`
  height: 55px;
  width: 100%;
  background-color: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;
  border-bottom: ${(props) => (props.scrolled ? '1px solid #b0b0b0' : 'none')};
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
  font-size: 26px;
  font-weight: extrabold;
  cursor: pointer;
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

const Navbar = ({ sectionRefs }: { sectionRefs: SectionRefs }) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll0 = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleScrollMove = (key: string) => {
    sectionRefs[key]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll0);

    return () => {
      window.removeEventListener('scroll', handleScroll0);
    };
  }, []);

  return (
    <NavbarWrapper scrolled={scrolled}>
      <NavbarContainer>
        <NavbarInner>
          <Logo onClick={() => handleScrollMove('banner')}>
            <GradientText
              colors={['#4f2cfc', '#ec8ed3', '#4f2cfc', '#ec8ed3', '#4f2cfc']}
              animationSpeed={3}
              showBorder={false}
              className='custom-class'
            >
              Park Ji Woo
            </GradientText>
          </Logo>
          <NavbarContent>
            <Menu>
              <MenuItem onClick={() => handleScrollMove('profile')}>
                프로필
              </MenuItem>
              <MenuItem onClick={() => handleScrollMove('skills')}>
                스킬
              </MenuItem>
              <MenuItem onClick={() => handleScrollMove('archiving')}>
                아카이빙
              </MenuItem>
              <MenuItem onClick={() => handleScrollMove('project')}>
                프로젝트
              </MenuItem>
              <MenuItem onClick={() => handleScrollMove('awards')}>
                수상 내역
              </MenuItem>
              <MenuItem onClick={() => handleScrollMove('license')}>
                자격증
              </MenuItem>
            </Menu>
          </NavbarContent>
        </NavbarInner>
      </NavbarContainer>
    </NavbarWrapper>
  );
};
export default Navbar;
