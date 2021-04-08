import React from "react"
import GlobalStyles from "../../styles/global"
import Header from "../Header"
import Navbar from "../Navbar"
import * as S from "./styled"

const Layout = ({ children, setText, setNumber, setRepository, repository, isArchivePage }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header repository={repository} setRepository={setRepository} isArchivePage={isArchivePage} />
      <Navbar  setText={setText} setNumber={setNumber} setRepository={setRepository} isArchivePage={isArchivePage} />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout