import React from "react";
import { build } from "../../../storage/question";

import * as S from "./styled";

const FormDisplay = () => {

  return (
    <S.DisplayWrapper>
      <S.Display onClick={() => { build('text') }} >Create</S.Display>
    </S.DisplayWrapper>
  );
};

export default FormDisplay;
