import styled from 'styled-components';

import Image from '@/components/Image';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Me = styled(Image)`
  width: 500px;
  position: absolute;
  left: -28px;
  bottom: -2px;
`;

const Circle = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  margin: 0 0 20px 0;
`;

const Text = styled.div`
  font-size: 16px;
  & + & {
    margin: 10px 0 0;
  }
  a {
    color: #598fb4;
    font-weight: bold;

    @media (hover: hover) {
      :hover {
        opacity: 0.8;
      }
    }
  }
`;

export default function Home() {
  return (
    <Root>
      <Circle>
        <Me src="/me.gif" />
      </Circle>
      <Text>Hello, 我是只會吃的熊, 希望這個網站有幫助到你！</Text>
      <Text>
        原始碼
        <a
          target="_blank"
          href="https://github.com/aNyMoRe0505/Fairyland"
          rel="noreferrer"
        >
          在這
        </a>
        , 歡迎加功能或提需求
      </Text>
    </Root>
  );
}
