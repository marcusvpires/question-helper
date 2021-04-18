import React from "react";
import GlobalStyles from "../../global/GlobalStyles";
import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./styled";

const Layout = ({ children, isRepoPage }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Header isRepoPage={isRepoPage} />
    <Navbar isRepoPage={isRepoPage} />
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
);

export default Layout;
