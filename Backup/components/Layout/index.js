import React from "react"
import GlobalStyles from "../../styles/global"
import Header from "../Header"
import Navbar from "../Navbar"
import * as S from "./styled"

const Layout = ({ children, form, isArchivePage }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Header form={form} isArchivePage={isArchivePage} />
      <Navbar  form={form} isArchivePage={isArchivePage} />
      <S.LayoutMain>{children}</S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout