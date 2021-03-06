import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  max-width: 100%;
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

const ColumnWidthCSS = css`
  flex: 1;

  :nth-child(1),
  :nth-child(5) {
    max-width: 100px;
  }
  :nth-child(6) {
    flex: 2;
  }
  :nth-child(7) {
    flex: 3;
  }
`;

const TableHead = styled.div`
  font-size: 16px;
  text-align: center;
  ${ColumnWidthCSS}
`;

const TableColumn = styled.div`
  font-size: 16px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${ColumnWidthCSS}
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

const ToyIcon = styled(Image)`
  width: 40px;
  height: 40px;
  margin: 0 10px 0 0;
`;

const MapArrowWrapper = styled.div`
  position: relative;
  & + & {
    margin: 0 0 0 15px;
  }
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

const Arrow = styled(FontAwesomeIcon).attrs({
  icon: faArrowUp,
})`
  && {
    width: 15px;
    height: 15px;
    cursor: pointer;
    color: #168ccdde;
    transform: rotate(45deg);
    margin: 0 0 0 3px;
    position: absolute;
    top: 0;
    right: -15px;

    @media (hover: hover) {
      :hover {
        opacity: 0.8;
      }
    }
  }
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
              <PetContentText>?????????{targetPet.level}</PetContentText>
              <PetContentText>?????????{targetPet.speciesDir}</PetContentText>
              <PetContentText>?????????{targetPet.element}</PetContentText>
              <PetContentText>?????????{targetPet.drop}</PetContentText>
              <PetContentText>???????????????{targetPet.skillAmount}</PetContentText>
              <PetContentText>
                ?????????{targetPet.skill.join(', ')}
              </PetContentText>
              <PetContentText>?????????{targetPet.map.join(', ')}</PetContentText>
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
          <TableHead>??????</TableHead>
          <TableHead>??????</TableHead>
          <TableHead>??????</TableHead>
          <TableHead>??????</TableHead>
          <TableHead>??????</TableHead>
          <TableHead>??????</TableHead>
          <TableHead>????????????</TableHead>
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
                {r.map.map((mapName) => {
                  const isUnClickable = mapName === '?????????';

                  return (
                    <MapArrowWrapper key={mapName}>
                      <Map
                        $unClickable={isUnClickable}
                        onClick={() => {
                          if (!isUnClickable) {
                            const mapedResult = allToy.filter((sr) =>
                              sr.map.join().includes(mapName)
                            );
                            setBaseMaterial('');
                            setDoll('');
                            setToyLevel(allToyLevel[0]);
                            setToyAbility(allToyAbility[0]);
                            setMap(mapName);
                            setResult(mapedResult);
                          }
                        }}
                      >
                        {mapName}
                      </Map>
                      {!isUnClickable && (
                        <Arrow
                          onClick={() => window.open(`/pet?map=${mapName}`)}
                        />
                      )}
                    </MapArrowWrapper>
                  );
                })}
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
            <Label>???????????????</Label>
            <Input
              placeholder="???????????????????????????"
              value={baseMaterial}
              onChange={(e) => setBaseMaterial(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchItemWrapper>
            <Label>???????????????</Label>
            <Input
              placeholder="?????????????????????"
              value={doll}
              onChange={(e) => setDoll(e.target.value)}
            />
          </SearchItemWrapper>
        </SearchSection>
        <SearchSection>
          <SearchItemWrapper>
            <Label>???????????????</Label>
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
            <Label>???????????????</Label>
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
            <Label>?????????????????????</Label>
            <Input
              placeholder="???????????????????????????"
              value={map}
              onChange={(e) => setMap(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchItemWrapper>
            <SearchButton onClick={handleSearch} type="button">
              ??????
            </SearchButton>
          </SearchItemWrapper>
        </SearchSection>
      </SearchBox>
      {MemoResultWrapper}
    </Root>
  );
};

export default PetToy;
