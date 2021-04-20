import React, { Fragment, useState } from "react";

import { render } from "react-dom";
import { screen } from "../../global/components/assets";
import UploadZone from '../../global/components/UploadZone'

import * as D from '../../global/Design'
import * as I from "@styled-icons/boxicons-regular/";
import * as S from "./styled";

/* ------------------------------------------------------------------------------- "/"

  Render element and add directly in root
  To call function displayErroBox('id', {
    title: -------------,
    desc: --(optional)--,
  })

/" ------------------------------------------------------------------------------ */

const displayImport = (id) => {
  screen(id);
  render(<ImportDatabase id={id}/>, document.getElementById(id));
};

const ImportDatabase = ({ id }) => {
  const [reverse, setReverse] = useState(false);
  return (
    <Fragment>
      <D.PopBack />
      <D.Popup>
        <S.ImportWrapper reverse={reverse}>
          <D.Flex color="#ff908b">
            <D.Icon size="2rem">
              <I.Ghost />
            </D.Icon>
            <D.Strong>Import files</D.Strong>
          </D.Flex>

          <UploadZone />

          <D.Flex justify="end">
            <D.Button
              onClick={() => {
                setReverse(true);
                setTimeout(() => {
                  document.getElementById(id).remove();
                }, 150);
              }}
            >
              Cancel
            </D.Button>
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
        </S.ImportWrapper>
      </D.Popup>
    </Fragment>
  );
};

export default displayImport;