import React, { useState } from "react";
import * as S from "./styled";

const Alt = ({ question }) => {
  const altList = ['A', 'B', 'C', 'D', 'E']
  const [alternative, setAlternative] = useState(question.value);
  
  function changeAlternative(e) {
    if (alternative === e.target.value) { setAlternative(null) }
    else { setAlternative(e.target.value) }
  }

  return (
    <S.AltWrapper value={alternative}>
      {altList.map( alt => {
        const id = question.id + 'alternative' + alt
        const tag = question.id + 'alternative' 
        const name = 'Alternative ' + alt
        return (
        <S.AltList key={id}>
          <S.AltInput 
            type='checkbox'
            name={tag}
            id={id}
            value={alt}
            checked={alternative === alt}
            onChange={changeAlternative}
          />
          <S.AltLabel
            title={name}
            htmlFor={id}
          >{alt}</S.AltLabel>
        </S.AltList>
      )})}
    </S.AltWrapper>
  );
};

export default Alt;
