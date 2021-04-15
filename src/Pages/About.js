import React from "react";
import Layout from "../components/Layout";

import * as S from '../components/About'

const AboutPage = () => {

  return (
    <Layout >
      <S.Container>
        <S.subTitle>Motivação</S.subTitle>
        <S.Paragraph>
          Durante o EAD, a minha escola contratou uma plataforma para as aulas, contudo, as avaliações apresentavam muitos problemas. Dentre eles destaca-se o elevado tempo de carregamento, não apresentava salvamento automatico, perda de conexão com o servidor e modo offline indisponível.
        </S.Paragraph>
        <S.Paragraph>
          Como em muitos casos eu perdia inumeras questões, normalmente eu marcava as questões em um papel, contudo, com o decorrer da pandemia, decidi desenvolver esta plataforma que não tivesse esses problemas para marcar as questões.
        </S.Paragraph>
        
        <S.subTitle>Suluções</S.subTitle>
        <S.Paragraph>
          Como a plataforma deveria funcionar offline, optei por utilizar a indexedDB, uma API para armazenamento client-side de quantidades significantes de informações e buscas com alta performance por índices.
        </S.Paragraph>
        <S.Paragraph>
          Com o objetivo de aumentar a performace, cada novo elemento é renderizado pelo react e adcionado ao DOM separadamente por meio do react render, ademais, em muitos cados, utilizo diretamente o DOM para ter acesso e alterar o valor de componentes distantes.
        </S.Paragraph>
        <S.Paragraph>
          Para salvar os inputs, utilizo o localStorage, fazendo uma requisição no init do useState.
        </S.Paragraph>

        <S.subTitle>Compatibilidade</S.subTitle>
        <S.Paragraph>
          A plataforma foi desenvolvide no FireFox, dessa forma, pode apresentar bugs e problemas em outros navegadores, esprecialmente no css. Apenas o Internet Explorer não apresenta compatibilidade com o indexedDB, impossibilitando o uso.      
        </S.Paragraph>
        <S.Paragraph>
          Ainda não desenvolvi o layout de outros tamanhos de monitor e mobile.
        </S.Paragraph>
      </S.Container>
    </Layout>
  );
};

export default AboutPage;