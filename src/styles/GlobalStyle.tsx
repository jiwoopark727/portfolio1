import { Global, css } from '@emotion/react';

const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://static.toss.im/tps/main.css');
      @import url('https://static.toss.im/tps/others.css');

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body {
        font-family: 'Toss Product Sans', -apple-system, BlinkMacSystemFont,
          'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        background-color: #fff;
        color: #000;
      }
    `}
  />
);

export default GlobalStyle;
