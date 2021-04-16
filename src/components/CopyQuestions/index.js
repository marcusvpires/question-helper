import React, { Fragment, useState } from "react";
import { copyQuestions } from "../../storage/question";

import About from './About'

import { CopyAlt } from "@styled-icons/boxicons-regular/CopyAlt";
import { X } from "@styled-icons/boxicons-regular/X";
import * as S from "./styled";

const Copy = () => {
  const [format, setFormat] = useState(() => {
    let format = localStorage.getItem("copyFormat");
    if (!format) {
      format = "Question [number] - [value]";
    }
    copyQuestions(format);
    return format;
  });
  const [valid, setValid] = useState(true);
  const validStr = ["[number]", "[value]", "[marker]"];

  const hendleFormat = (ev) => {
    const value = ev.target.value;
    isValid(value.match(/\[.+?\]/g));
    setFormat(value);
    localStorage.setItem("copyFormat", value);
  };

  const isValid = (matched) => {
    if (!matched) {
      setValid(true);
    }
    for (const index in matched) {
      console.log(validStr.indexOf(matched[index]), matched[index]);
      if (validStr.indexOf(matched[index]) === -1) {
        setValid(false);
        return;
      } else {
        setValid(true);
      }
    }
  };

  const copy = () => {
    const element = document.getElementById("copyResult");
    element.select()
    document.execCommand('copy')
  };

  return (
    <Fragment>
      <S.CopyBack />
      <S.CopyWrapper>
        <About />
        <S.CopyContainer>
          <S.CopyHeader>
            <S.CopyFormatInput
              value={format}
              onChange={hendleFormat}
              onBlur={() => {
                copyQuestions(format);
              }}
              valid={valid}
            />
            <S.CopyButton
              padding="1rem"
              onClick={() => {
                copyQuestions(format);
              }}
            >
              Convert
            </S.CopyButton>

            <S.CopyButton padding="0.9rem">
              <S.CoptIcon onClick={copy}>
                <CopyAlt />
              </S.CoptIcon>
            </S.CopyButton>

            <S.CopyButton
              padding="0.9rem"
              onClick={() => {
                console.log("Remove");
                document.getElementById("copyContainer").remove();
              }}
            >
              <S.CoptIcon>
                <X />
              </S.CoptIcon>
            </S.CopyButton>
          </S.CopyHeader>

          <S.CopyResult id="copyResult" />
        </S.CopyContainer>
      </S.CopyWrapper>
    </Fragment>
  );
};

export default Copy;
