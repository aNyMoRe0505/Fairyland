import { memo } from 'react';
import styled from 'styled-components';

import URLS from '@/constants/urls';

import Image from '../Image';
import Link from '../Link';

export const HEADER_HEIGHT = 72;

const Root = styled.div`
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: sticky;
  z-index: 999;
  top: 0;
`;

const HeaderRoot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 5%) 0px 4px 20px;
  background-color: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 0 30px;
`;

const Logo = styled(Image)`
  height: 89px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(0, -50%);
`;

const StyledLink = styled(Link)`
  letter-spacing: 1px;
  position: relative;

  & + & {
    margin-left: 35px;
  }

  ::after {
    content: '';
    width: 0%;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    height: 3px;
    background-color: black;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  @media (hover: hover) {
    :hover {
      font-weight: bold;
      ::after {
        width: 100%;
      }
    }
  }
`;

const links = [
  {
    text: '首頁',
    pathname: URLS.HOME,
  },
  {
    text: '幻獸',
    pathname: URLS.PET,
  },
  {
    text: '玩具',
    pathname: URLS.PET_TOY,
  },
];

const Header = () => {
  return (
    <Root>
      <HeaderRoot>
        <Container>
          <Link href={URLS.HOME}>
            <Logo src="/pet/666.gif" alt="logo" />
          </Link>
          {links.map((link) => (
            <StyledLink key={link.text} href={link.pathname}>
              {link.text}
            </StyledLink>
          ))}
        </Container>
      </HeaderRoot>
    </Root>
  );
};

export default memo(Header);
