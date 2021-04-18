import React, { Fragment, useState } from "react";

import { render } from "react-dom";
import { screen } from "../../assets";

import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";
import * as D from "../../../Design";

/* ------------------------------------------------------------------------------- "/"

  Render element and add directly in root
  To call function displayErroBox('id', {
    title: -------------,
    desc: --(optional)--,
  })

/" ------------------------------------------------------------------------------ */

const displayErroBox = (id, message) => {
  screen(id);
  if (!message.desc) {
    message.desc =
      "This program is under development, if possible, reports the error to help correct the problem, more information about the error is in the browser console.";
  }
  render(<ErroBox id={id} message={message} />, document.getElementById(id));
};

const ErroBox = ({ id, message }) => {
  const [reverse, setReverse] = useState(false);
  return (
    <Fragment>
      <D.PopBack />
      <D.Popup>
        <S.Wrapper reverse={reverse}>
          <D.Flex color="#ff908b">
            <D.Icon size="2rem">
              <I.Error />
            </D.Icon>
            <D.Strong>{message.title}</D.Strong>
          </D.Flex>
          <D.Text>{message.desc}</D.Text>
          <D.Flex justify="end">
            <D.Link
              href="https://github.com/M4rcusVinicius/question-helper/issues/new"
              target="_blank"
              margin='0 1rem'
            >
              Report
            </D.Link>
            <D.Button
              onClick={() => {
                setReverse(true);
                setTimeout(() => {
                  document.getElementById(id).remove();
                }, 150);
              }}
            >
              Confirm
            </D.Button>
          </D.Flex>
        </S.Wrapper>
      </D.Popup>
    </Fragment>
  );
};

export default displayErroBox;
