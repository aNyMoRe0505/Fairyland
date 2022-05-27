import { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import { usePopper } from 'react-popper';
import styled, { css } from 'styled-components';

import Image from '@/components/Image';
import allPet from '@/data/pet';
import allToy from '@/data/toy';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  box-shadow: 0px 0px 5px 0px black;
  border-radius: 21px;
  padding: 30px;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin: 0 0 0 20px;
  }
`;

const SearchItemWrapper = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin: 10px 0 0;
  }
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 20px;
  outline: none;
  border: 1px solid black;
`;

const Label = styled.div`
  font-size: 16px;
`;

const Select = styled.select`
  font-size: 16px;
  width: 200px;
  height: 40px;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 20px;
  outline: none;
  border: 1px solid black;
`;

const Option = styled.option``;

const ResultWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 40px 0 0;
`;

const SearchButton = styled.button`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  width: 100px;
  height: 35px;
  border: 1px solid black;
  border-radius: 20px;
  color: black;
  padding: 5px;
  transition: all 0.3s ease;
  background-color: transparent;
  cursor: pointer;

  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
    border-radius: 20px;
    background-color: white;
    transition: all 0.3s ease;
  }

  @media (hover: hover) {
    :hover {
      color: white;

      ::after {
        width: 100%;
        background-color: black;
      }
    }
  }
`;

const TableHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TableHead = styled.div`
  font-size: 16px;
  flex: 1;
  text-align: center;

  :nth-child(6) {
    flex: 2;
  }

  :nth-child(7) {
    flex: 2;
  }
`;

const TableResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0;
`;

const TableRowWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-radius: 30px;

  :nth-child(2n) {
    background-color: #dddbd88a;
  }

  & + & {
    margin: 10px 0 0;
  }
`;

const TableColumn = styled.div`
  font-size: 16px;
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  :nth-child(6) {
    flex: 2;
  }

  :nth-child(7) {
    flex: 2;
  }
`;

const ToyIcon = styled(Image)`
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
`;

const Map = styled.div`
  ${(props) =>
    !props.$unClickable &&
    css`
      cursor: pointer;
      color: #487ba1;
      @media (hover: hover) {
        :hover {
          opacity: 0.8;
        }
      }
    `};

  & + & {
    margin: 0 0 0 5px;
  }
`;

const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 5px 0px black;
  border-radius: 20px;
  padding: 20px;
  background-color: white;
`;

const PetIcon = styled(Image)`
  min-width: 150px;
  width: 150px;
  margin: 0 15px 0 0;
`;

const PetContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PetName = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

const PetContentText = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 0;
`;

// eslint-disable-next-line react/prop-types
const PetDetailPopup = ({ petName }) => {
  const [isShow, setIsShow] = useState(false);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const isClient = typeof window !== 'undefined';
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'top',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 20],
        },
      },
    ],
  });

  const targetPet = allPet.find((pet) => pet.name.includes(petName));

  return (
    <>
      <Map
        onMouseLeave={() => setIsShow(false)}
        onMouseEnter={() => setIsShow(true)}
        ref={setReferenceElement}
      >
        {petName}
      </Map>
      {isClient &&
        isShow &&
        targetPet &&
        ReactDOM.createPortal(
          <PopupContainer
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <PetIcon src={`/pet/${targetPet.id}.gif`} />
            <PetContent>
              <PetName>{targetPet.name}</PetName>
              <PetContentText>等級：{targetPet.level}</PetContentText>
              <PetContentText>偏向：{targetPet.speciesDir}</PetContentText>
              <PetContentText>屬性：{targetPet.element}</PetContentText>
              <PetContentText>掉落：{targetPet.drop}</PetContentText>
              <PetContentText>技能數量：{targetPet.skillAmount}</PetContentText>
              <PetContentText>
                技能：{targetPet.skill.join(', ')}
              </PetContentText>
              <PetContentText>地圖：{targetPet.map.join(', ')}</PetContentText>
            </PetContent>
          </PopupContainer>,
          document.body
        )}
    </>
  );
};

const allToyLevel = ['all', 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const allToyAbility = ['all', 25, 30, 35, 40, 45, 50];

const PetToy = () => {
  const [baseMaterial, setBaseMaterial] = useState('');
  const [doll, setDoll] = useState('');
  const [toyLevel, setToyLevel] = useState(allToyLevel[0]);
  const [toyAbility, setToyAbility] = useState(allToyAbility[0]);
  const [map, setMap] = useState('');
  const [result, setResult] = useState(allToy);

  const MemoResultWrapper = useMemo(
    () => (
      <ResultWrapper>
        <TableHeaderWrapper>
          <TableHead>等級</TableHead>
          <TableHead>名稱</TableHead>
          <TableHead>基底</TableHead>
          <TableHead>娃娃</TableHead>
          <TableHead>數值上限 (娃娃數量 * 5)</TableHead>
          <TableHead>材料</TableHead>
          <TableHead>卡娃地圖</TableHead>
        </TableHeaderWrapper>
        <TableResultWrapper>
          {result.map((r) => (
            <TableRowWrapper key={r.name}>
              <TableColumn>{r.level}</TableColumn>
              <TableColumn>
                <ToyIcon src={`/toy/${r.id}.gif`} alt="toyIcon" />
                {r.name}
              </TableColumn>
              <TableColumn>
                <ToyIcon src={`/toy/B${r.id}.gif`} alt="toyIcon" />
                {r.base}
              </TableColumn>
              <TableColumn>
                <PetDetailPopup petName={r.petsRelated} />
              </TableColumn>
              <TableColumn>{r.statusLimit}</TableColumn>
              <TableColumn>{r.item}</TableColumn>
              <TableColumn>
                {r.map.map((mapName) => (
                  <Map
                    $unClickable={mapName === '魔幣寵'}
                    onClick={() => {
                      if (mapName !== '魔幣寵') {
                        const mapedResult = result.filter((sr) =>
                          sr.map.join().includes(mapName)
                        );
                        setMap(mapName);
                        setResult(mapedResult);
                        window.open(`/pet?map=${mapName}`);
                      }
                    }}
                    key={mapName}
                  >
                    {mapName}
                  </Map>
                ))}
              </TableColumn>
            </TableRowWrapper>
          ))}
        </TableResultWrapper>
      </ResultWrapper>
    ),
    [result]
  );

  const handleSearch = () => {
    let searchResult = allToy;
    if (baseMaterial) {
      searchResult = searchResult.filter((sr) =>
        sr.base.includes(baseMaterial)
      );
    }
    if (doll) {
      searchResult = searchResult.filter((sr) => sr.doll.includes(doll));
    }
    if (toyLevel !== 'all') {
      searchResult = searchResult.filter((sr) => `${sr.level}` === toyLevel);
    }
    if (toyAbility !== 'all') {
      searchResult = searchResult.filter(
        (sr) => `${sr.statusLimit}` === toyAbility
      );
    }
    if (map) {
      searchResult = searchResult.filter((sr) => sr.map.join().includes(map));
    }
    setResult(searchResult);
  };

  return (
    <Root>
      <SearchBox>
        <SearchSection>
          <SearchItemWrapper>
            <Label>玩具基底：</Label>
            <Input
              placeholder="按玩具基底名稱搜尋"
              value={baseMaterial}
              onChange={(e) => setBaseMaterial(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchItemWrapper>
            <Label>加工娃娃：</Label>
            <Input
              placeholder="按加工娃娃搜尋"
              value={doll}
              onChange={(e) => setDoll(e.target.value)}
            />
          </SearchItemWrapper>
        </SearchSection>
        <SearchSection>
          <SearchItemWrapper>
            <Label>玩具等級：</Label>
            <Select
              value={toyLevel}
              onChange={(e) => setToyLevel(e.target.value)}
            >
              {allToyLevel.map((level) => (
                <Option key={level} value={level}>
                  {level}
                </Option>
              ))}
            </Select>
          </SearchItemWrapper>
          <SearchItemWrapper>
            <Label>能力上限：</Label>
            <Select
              value={toyAbility}
              onChange={(e) => setToyAbility(e.target.value)}
            >
              {allToyAbility.map((ability) => (
                <Option key={ability} value={ability}>
                  {ability}
                </Option>
              ))}
            </Select>
          </SearchItemWrapper>
        </SearchSection>
        <SearchSection>
          <SearchItemWrapper>
            <Label>卡娃出現地圖：</Label>
            <Input
              placeholder="按卡娃出現地圖搜尋"
              value={map}
              onChange={(e) => setMap(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchItemWrapper>
            <SearchButton onClick={handleSearch} type="button">
              搜尋
            </SearchButton>
          </SearchItemWrapper>
        </SearchSection>
      </SearchBox>
      {MemoResultWrapper}
    </Root>
  );
};

export default PetToy;
