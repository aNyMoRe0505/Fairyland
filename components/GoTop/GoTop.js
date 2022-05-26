import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  position: fixed;
  bottom: 35px;
  right: 35px;
  cursor: pointer;
  display: none;
`;

const ArrowWrapper = styled(FontAwesomeIcon).attrs({
  icon: faArrowUp,
})`
  && {
    width: 35px;
    height: 35px;
  }
`;

const GoTop = () => {
  const btnRef = useRef();

  useEffect(() => {
    const trackScrollTop = () => {
      const element = document.scrollingElement || document.documentElement;
      if (element.scrollTop > 600) {
        btnRef.current.style.display = 'block';
      } else {
        btnRef.current.style.display = 'none';
      }
    };

    window.addEventListener('scroll', trackScrollTop);

    return () => {
      window.removeEventListener('scroll', trackScrollTop);
    };
  }, []);
  return (
    <Root ref={btnRef}>
      <ArrowWrapper
        onClick={() => window.scroll({ top: 0, left: 0, behavior: 'smooth' })}
      />
    </Root>
  );
};

export default GoTop;
