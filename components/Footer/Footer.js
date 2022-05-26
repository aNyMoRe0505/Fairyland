/* eslint-disable */
import { memo } from 'react';
import styled from 'styled-components';

const FooterRoot = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 15px 15px;
`;

const Text = styled.p`
  margin: 0;

  a {
    font-weight: bold;

    @media (hover: hover) {
      :hover {
        opacity: 0.8;
      }
    }
  }

  a + a {
    margin: 0 0 0 5px;
  }
`;

const Footer = () => {
  return (
    <FooterRoot>
      <Text>
        資料來源:{' '}
        <a
          target="_blank"
          href="http://dsps.case.eorz.net/"
          style={{ color: '#24b059' }}
          rel="noreferrer"
        >
          敗家一族
        </a>
        <a
          target="_blank"
          href="https://chi-hsin.github.io/petFairy/"
          style={{ color: '#c42323' }}
          rel="noreferrer"
        >
          幻獸樂園
        </a>
      </Text>
    </FooterRoot>
  );
};

export default memo(Footer);
