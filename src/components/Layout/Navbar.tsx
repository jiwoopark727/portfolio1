import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { SectionRefs } from '../../types/types.ts';
import GradientText from '../../styles/GradientText/GradientText.tsx';

const NavbarWrapper = styled.div<{ scrolled: boolean }>`
  height: 55px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;
  background-color: ${(props) => (props.scrolled ? '#f5f5f5' : 'none')};
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
  /* background-color: #d9d9d9;
  padding: 0.4rem 0.7rem 0.4rem 0.7rem; */
  /* border-radius: 10px; */
  font-weight: extrabold;
  cursor: pointer;
`;

const NavbarContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Menu = styled.ul<{ scrolled: boolean }>`
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  color: #ededed;
  color: ${(props) => (props.scrolled ? '#4e5968' : 'none')};
  z-index: 10;
`;

const MenuItem = styled.li<{ scrolled: boolean }>`
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 10px 8px 10px;
  border-radius: 8px;
  z-index: 100;
  &:hover {
    background-color: #fff;
    color: #000;
    background-color: ${(props) => (props.scrolled ? '#000' : 'none')};
    color: ${(props) => (props.scrolled ? '#fff' : 'none')};
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
              animationSpeed={5}
              showBorder={false}
              className='custom-class'
            >
              Park Ji Woo
            </GradientText>
          </Logo>
          <NavbarContent>
            <Menu scrolled={scrolled}>
              <MenuItem
                onClick={() => handleScrollMove('profile')}
                scrolled={scrolled}
              >
                프로필
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollMove('skills')}
                scrolled={scrolled}
              >
                스킬
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollMove('archiving')}
                scrolled={scrolled}
              >
                아카이빙
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollMove('project')}
                scrolled={scrolled}
              >
                프로젝트
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollMove('awards')}
                scrolled={scrolled}
              >
                수상 내역
              </MenuItem>
              <MenuItem
                onClick={() => handleScrollMove('license')}
                scrolled={scrolled}
              >
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
