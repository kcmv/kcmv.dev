import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding-top: 0.2rem;
  font-family: 'Fira Code', monospace;
  font-size: 2vw;
}

@media screen and (min-width: 1024px) {
  html,
  body {
    font-size: 20px;
  }
}

body {
  --color-background: #272822;
  --color-white-space: #464741;
  --color-collapsed: #464741;
  --color-comment: #75715e;
  --color-variable: #f8f8f2;
  --color-expression: #f8f8f2;
  --color-storage-type: #66d9ef;
  --color-keyword: #f92672;
  --color-type: #a6e22e;
  --color-class: #a6e22e;
  --color-string: #e6db74;
  --color-constant: #ae81ff;
  --color-number: #ae81ff;

  --color-zsh-text: #899;
  --color-zsh-path-background: #2e8ccf;
  --color-zsh-path-foreground: #000;
  --color-zsh-branch-background: #85981c;
  --color-zsh-branch-foreground: #000;
  --color-zsh-command-valid: #85981c;
  --color-zsh-command-invalid: #c14c22;
  --color-zsh-args: #cdd;
  --color-zsh-args-autocomplete: #566;

  margin: 0.3rem;
  background-color: var(--color-background);
}

.hidden {
  display: none;
}

.loader {
  color: var(--color-zsh-text);
  font-size: 0;
  padding-bottom: 0.5rem;
}

.loader .now {
  display: inline;
}

.loader span {
  font-size: 1rem;
}

.loader .branch:before,
.loader .command:before {
  content: '';
  display: inline-block;
  width: 0;
  height: 0;
  border: 0.6rem solid transparent;
  vertical-align: -0.25rem;
}

.loader .path {
  background-color: var(--color-zsh-path-background);
  color: var(--color-zsh-path-foreground);
  padding-right: 1rem;
}

.loader .branch {
  background-color: var(--color-zsh-branch-background);
  color: var(--color-zsh-branch-foreground);
  padding-right: 1rem;
}

.loader .branch:before {
  border-left-color: var(--color-zsh-path-background);
}

.loader .command:after {
  color: var(--color-zsh-command-valid);
}

.loader .command:before {
  border-left-color: var(--color-zsh-branch-background);
}

.loader .args:before {
  padding-left: 1rem;
  color: var(--color-zsh-args);
}

.loader .args:after {
  color: var(--color-zsh-args-autocomplete);
}

.step-1 .loader .command:after {
  content: 'c';
  color: var(--color-zsh-command-invalid);
}
.step-2 .loader .command:after {
  content: 'ca';
  color: var(--color-zsh-command-invalid);
}
.step-3 .loader .command:after {
  content: 'cat';
}

.step-4 .loader .command:after {
  content: 'cat';
}
.step-4 .loader .args:before {
  content: 'in';
}
.step-4 .loader .args:after {
  content: 'dex.ts';
}

.step-5 .loader .command:after {
  content: 'cat';
}
.step-5 .loader .args:before {
  content: 'in';
}
.step-5 .loader .args:after {
  content: 'dex.ts';
}

.step-6 .loader .command:after {
  content: 'cat';
}
.step-6 .loader .args:before {
  content: 'index.ts';
}

.step-7 .loader .command:after {
  content: 'cat';
}
.step-7 .loader .args:before {
  content: 'index.ts';
}
.step-7 #view {
  display: block;
}
`;

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
