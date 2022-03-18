import * as React from "react";
import Hero from "../components/hero/hero";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #111;
    background: linear-gradient(#0c141f 40%, #cf33d9 41%, #0c141f 60%);
  }
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <GlobalStyle />
      <Hero />
    </main>
  );
};

export default IndexPage;
