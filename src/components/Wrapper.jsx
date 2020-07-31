import React from "react";

import PropTypes from "prop-types";

import styled from "@emotion/styled";

import GlobalStyle from "./GlobalStyles";

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  background: #fff;
  min-height: 100vh;
  padding-bottom: 60px;
`;

export default function Wrapper({ children }) {
  return (
    <>
      <GlobalStyle />
      <Container>{children}</Container>
    </>
  );
}

Wrapper.propTypes = {
  children: PropTypes.node,
};
