import React from "react";
import * as S from "./styled";

const Alt = () => {
  return (
    <S.AltWrapper>
      <S.AltList key='alternativeA'>
        <S.AltInput 
          type='radio'
          name="Alternative"
          value='A'
          id="alternativeA"
        />
        <S.AltLabel
          title="Alternative A"
          for="alternativeA"
        >A</S.AltLabel>
      </S.AltList>
      <S.AltList key='alternativeB'>
        <S.AltInput 
          type='radio'
          name="Alternative"
          value='B'
          id="alternativeB"
        />
        <S.AltLabel
          title="Alternative B"
          for="alternativeB"
        >A</S.AltLabel>
      </S.AltList>
    </S.AltWrapper>
  );
};

export default Alt;
