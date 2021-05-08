import React from "react";

import * as I from '@styled-icons/boxicons-regular/'
import * as S from "./styled";
import * as D from "../../../global/Design"

const Features = () =>  (
  <S.Wrapper>
    <S.Item>
      <D.Icon size="7rem"><I.Timer /></D.Icon>
      <D.h2 align="center" margin="2.5rem 0 1.2rem">Velocidade</D.h2>
      <D.p align="center">O site foi desenvolvido para responder as requisições da forma mais rápida possível. Dependendo do processador, as questões são adicionadas quase instantaneamente</D.p>
    </S.Item>

    <S.Item>
      <D.Icon size="7rem"><I.CheckShield /></D.Icon>
      <D.h2 align="center" margin="2.5rem 0 1.2rem">Segurança</D.h2>
      <D.p align="center">Os dados ficam armazenados localmente, dessa forma, nenhum outro computador tem acesso. Da mesma forma, você pode acessa-los sem internet</D.p>
    </S.Item>

    <S.Item>
      <D.Icon size="7rem"><I.CheckDouble /></D.Icon>
      <D.h2 align="center" margin="2.5rem 0 1.2rem">Gratuito</D.h2>
      <D.p align="center">Nenhuma funcionalidade da plataforma é paga e o site não apresenta nenhum tipo de monetização como anúncios e propagandas que prejudicam a experiencia.</D.p>
    </S.Item>
  </S.Wrapper>
);

export default Features;