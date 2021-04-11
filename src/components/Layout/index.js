import React from "react";
import GlobalStyles from "../../styles/global";
import Header from "../Header";
import Navbar from "../Navbar";
import * as S from "./styled";

const Layout = ({ children, selectRepository, setSelectRepository, isRepoPage }) => (
  <S.LayoutWrapper>
    <GlobalStyles />
    <Header />
    <Navbar
      selectRepository={selectRepository}
      setSelectRepository={setSelectRepository}
      isRepoPage={isRepoPage}
    />
    <S.LayoutMain>{children}</S.LayoutMain>
  </S.LayoutWrapper>
);

export default Layout;
