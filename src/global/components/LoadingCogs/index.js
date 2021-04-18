import React from "react";

import * as S from "./styled";

const LoadingCogs = () => (
  <S.Wrapper>
    <S.Cog color="#03266c" border="#052d7c" />
    <S.Cog reverse margin="2.250em 0 0 -3.375em" color="#031945" border="#082561" />
    <S.Cog margin="5.625em 0 0 -1.125em" color="#03266c" border="#052d7c" />
  </S.Wrapper>
);

export default LoadingCogs;
