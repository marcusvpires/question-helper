import React from "react"
import GlobalStyles from "../../styles/global"
import Navbar from "../Navbar"
import * as S from "./styled"

const Layout = ({ children }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <Navbar />
      <S.LayoutMain>
        <main>{children}</main>
      </S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout