import React from "react"
import GlobalStyles from "../../styles/global"
import * as S from "./styled"

const Layout = ({ children }) => (
    <S.LayoutWrapper>
      <GlobalStyles />
      <S.LayoutMain>
        <main>{children}</main>
      </S.LayoutMain>
    </S.LayoutWrapper>
  )

export default Layout