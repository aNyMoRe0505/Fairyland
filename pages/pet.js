import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import Image from '@/components/Image';
import allPet from '@/data/pet';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px black;
  border-radius: 21px;
  padding: 30px;
  max-width: 100%;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$row &&
    css`
      flex-direction: row;
      align-items: center;
    `}

  & + & {
    margin: 15px 0 0;
  }
`;

const SearchItemWrapper = styled.div`
  display: flex;
  align-items: center;

  & + & {
    margin: 0 0 0 10px;
  }
`;

const SearchItemOptionsWrapper = styled(SearchItemWrapper)`
  align-items: start;
  & + & {
    margin: 10px 0 0;
  }
`;

const Label = styled.div`
  font-size: 16px;
`;

const Input = styled.input`
  width: 150px;
  height: 40px;
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 20px;
  outline: none;
  border: 1px solid black;
`;

const SkillOptionWrapper = styled.div`
  max-width: 600px;
  display: flex;
  flex-wrap: wrap;
`;

const ButtonGeneralCSS = css`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  width: 95px;
  height: 30px;
  border: 1px solid black;
  border-radius: 20px;
  color: black;
  transition: all 0.3s ease;
  cursor: pointer;
  background-color: transparent;
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
`;

const OptionButton = styled.button`
  ${ButtonGeneralCSS}
  ${(props) =>
    props.$isSkillOption
      ? css`
          :nth-child(n + 7) {
            margin-top: 5px;
          }

          :not(:nth-child(6n + 1)) {
            margin-left: 5px;
          }
        `
      : css`
          :not(:nth-child(2)) {
            margin-left: 5px;
          }
        `}
  ${(props) =>
    props.$isActived &&
    css`
      color: white;
      ::after {
        width: 100%;
        background-color: black;
      }
    `}
`;

const SearchButton = styled.button`
  ${ButtonGeneralCSS}
  margin: 0 0 0 10px;
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

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 0;
`;

const PetDetailBox = styled.div`
  border: 2px solid black;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px;

  & + & {
    margin: 20px 0 0;
  }
`;

const PetIcon = styled(Image)`
  min-width: 200px;
  width: 200px;
  margin: 0 15px 0 0;
`;

const PetContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const PetName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.$isRare ? '#e65959' : 'black')};
`;

const PetContentText = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin: 10px 0 0;
`;

const ALL_ELEMENT = ['???', '???', '???', '???', '???', '???', '???'];
const ALL_SPICE_DIR = ['???', '???', '???', '???', '???'];
const ALL_SKILL_OPTIONS = [
  '????????????',
  '????????????',
  '??????',
  '??????',
  '??????',
  '??????',
  '??????',
  '??????',
  '??????',
  '??????',
  '??????',
  '??????',
  '????????????',
  '?????????',
  '?????????',
  '?????????',
];

const Pet = () => {
  const [element, setElement] = useState('');
  const [speciesDir, setSpeciesDir] = useState('');
  const [skillOptions, setSkillOptions] = useState([]);
  const [name, setName] = useState('');
  const [drop, setDrop] = useState('');
  const [map, setMap] = useState('');
  const [result, setResult] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (router.query.map) {
      setResult(
        allPet.filter((pet) => pet.map.join().includes(router.query.map))
      );
      setMap(router.query.map);
    }
  }, [router]);

  const handleSearch = () => {
    if (
      !element &&
      !speciesDir &&
      !skillOptions.length &&
      !name &&
      !drop &&
      !map
    ) {
      alert('?????????????????????????????????');
      return;
    }

    let searchResult = allPet;

    if (name) {
      searchResult = searchResult.filter((pet) => pet.name.includes(name));
    }

    if (drop) {
      searchResult = searchResult.filter((pet) => pet.drop.includes(drop));
    }

    if (map) {
      searchResult = searchResult.filter((pet) => pet.map.join().includes(map));
    }

    if (element) {
      searchResult = searchResult.filter((pet) => pet.element === element);
    }

    if (speciesDir) {
      searchResult = searchResult.filter(
        (pet) => pet.speciesDir === speciesDir
      );
    }

    if (skillOptions.length) {
      searchResult = searchResult.filter((pet) =>
        skillOptions.every((so) => {
          if (so === '????????????') {
            return pet.canLearnSkill;
          }
          return pet.skill.includes(so);
        })
      );
    }

    setResult(searchResult);

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleOptionClick = useCallback(
    (val) => {
      const targetIndex = skillOptions.findIndex((source) => source === val);
      if (targetIndex !== -1) {
        setSkillOptions([
          ...skillOptions.slice(0, targetIndex),
          ...skillOptions.slice(targetIndex + 1),
        ]);
      } else {
        setSkillOptions([...skillOptions, val]);
      }
    },
    [skillOptions]
  );

  const SpeciesDirContent = useMemo(
    () => (
      <>
        {ALL_SPICE_DIR.map((sd) => {
          const actived = speciesDir === sd;
          return (
            <OptionButton
              $isActived={actived}
              onClick={() => setSpeciesDir(actived ? '' : sd)}
              key={sd}
            >
              {sd}
            </OptionButton>
          );
        })}
      </>
    ),
    [speciesDir]
  );

  const ElementContent = useMemo(
    () => (
      <>
        {ALL_ELEMENT.map((el) => {
          const actived = element === el;
          return (
            <OptionButton
              $isActived={actived}
              onClick={() => setElement(actived ? '' : el)}
              key={el}
            >
              {el}
            </OptionButton>
          );
        })}
      </>
    ),
    [element]
  );

  const SkillOptionsContent = useMemo(() => {
    return (
      <SkillOptionWrapper>
        {ALL_SKILL_OPTIONS.map((s) => (
          <OptionButton
            $isActived={skillOptions.includes(s)}
            onClick={() => handleOptionClick(s)}
            $isSkillOption
            key={s}
          >
            {s}
          </OptionButton>
        ))}
      </SkillOptionWrapper>
    );
  }, [skillOptions, handleOptionClick]);

  const ResultContent = useMemo(
    () => (
      <DetailWrapper>
        {result.length ? (
          <>
            {result.map((r) => (
              <PetDetailBox key={r.name}>
                <PetIcon src={`/pet/${r.id}.gif`} />
                <PetContent>
                  <PetName $isRare={r.isRare}>{`${r.name}${
                    r.isRare ? '(??????)' : ''
                  }`}</PetName>
                  <PetContentText>?????????{r.level}</PetContentText>
                  <PetContentText>?????????{r.speciesDir}</PetContentText>
                  <PetContentText>?????????{r.element}</PetContentText>
                  <PetContentText>?????????{r.drop}</PetContentText>
                  <PetContentText>???????????????{r.skillAmount}</PetContentText>
                  <PetContentText>?????????{r.skill.join(', ')}</PetContentText>
                  <PetContentText>?????????{r.map.join(', ')}</PetContentText>
                </PetContent>
              </PetDetailBox>
            ))}
          </>
        ) : (
          <p>????????????</p>
        )}
      </DetailWrapper>
    ),
    [result]
  );

  return (
    <Root>
      <SearchBox>
        <SearchSection>
          <SearchItemOptionsWrapper>
            <Label>?????????</Label>
            {SpeciesDirContent}
          </SearchItemOptionsWrapper>
          <SearchItemOptionsWrapper>
            <Label>?????????</Label>
            {ElementContent}
          </SearchItemOptionsWrapper>
          <SearchItemOptionsWrapper>
            <Label>?????????</Label>
            {SkillOptionsContent}
          </SearchItemOptionsWrapper>
        </SearchSection>
        <SearchSection $row>
          <SearchItemWrapper>
            <Label>?????????</Label>
            <Input
              placeholder="???????????????"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchItemWrapper>
            <Label>?????????</Label>
            <Input
              placeholder="?????????????????????"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchItemWrapper>
            <Label>?????????</Label>
            <Input
              placeholder="?????????????????????"
              value={map}
              onChange={(e) => setMap(e.target.value)}
            />
          </SearchItemWrapper>
          <SearchButton onClick={handleSearch}>??????</SearchButton>
        </SearchSection>
      </SearchBox>
      {ResultContent}
    </Root>
  );
};

export default Pet;
