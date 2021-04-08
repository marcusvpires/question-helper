import React from "react"
import GlobalStyles from "../../styles/global"
import Header from "../Header"
import Navbar from "../Navbar"
import * as S from "./styled"

const Layout = ({ children, setRepository, repository, isArchivePage, form }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header repository={repository} setRepository={setRepository} isArchivePage={isArchivePage} />
      <Navbar  setRepository={setRepository} isArchivePage={isArchivePage} form={form} />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout