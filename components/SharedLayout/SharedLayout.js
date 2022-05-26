import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from '../Footer';
import Header from '../Header';

const Root = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChildrenWrapper = styled.div`
  flex: 1;
  width: 100%;
  padding: 50px 30px 30px;
  max-width: 1660px;
`;

const SharedLayout = ({ children }) => {
  return (
    <Root>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </Root>
  );
};

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SharedLayout;
