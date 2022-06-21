import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
  --primary-clr:#a1388b;
 --secondary-clr:#2f2e41 ;
 --shadow2-clr:#ccc;
 --shadow3-clr:#aaa;
 --shadow-clr:#eee;
 --shadow1-clr:#ddd;
 --dark-clr:#222;
 --dark2-clr:#555;
 --dark3-clr:#999;
 --light-clr:#fff;
 --light2-clr:#f9f9f9;
 --bg-clr:var(--light-clr);
 --bg-text-clr:var(--dark-clr);
 --hd-bg-clr:var(--light-clr);
 --hd-text-clr:var(--primary-clr);
 --hd-border-clr:var(--shadow2-clr);
 --input-bg-clr:var(--light-clr);
 --input-text-clr:var(--primary-clr);
 --input-border-clr:var(--shadow2-clr);
 --btn-bg-clr:var(--light-clr);
 --btn-text-clr:var(--primary-clr);
 --btn-bg-hover-clr:var(--primary-clr);
 --btn-text-hover-clr:var(--light-clr);
 --btn-bg-active-clr:var(--light-clr);
 --btn-text-active-clr:var(--primary-clr);;
 --btn-border-clr:var(--primary-clr);
 --toggle-slide-clr:var(--light2-clr);
 --toggle-ball-clr:var(--primary-clr);
 --toggle-border-clr:var(--shadow2-clr);
 --hex-clr:var(--shadow3-clr)
}


html.dark{
  :root{
  --bg-clr:var(--dark-clr);
 --bg-text-clr:var(--light-clr);
 --hd-bg-clr:var(--dark-clr);
 --hd-border-clr:var(--dark2-clr);
 --input-bg-clr:var(--dark-clr);
 --input-border-clr:var(--dark2-clr);
 --btn-bg-clr:var(--dark-clr);
 --btn-text-hover-clr:var(--dark-clr);
 --btn-bg-active-clr:var(--dark-clr);
 --toggle-slide-clr:var(--dark-clr);
 --toggle-border-clr:var(--dark3-clr);
 --hex-clr:var(--dark2-clr)
}}


*,
:where(*, ::after, ::before) {
  margin: 0;
  box-sizing: border-box;
  padding: 0;
}

html:focus-within {
  scroll-behavior: smooth;
  scroll-snap-type: mandatory;
}

body {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background-color: var(--bg-clr);
  color:var(--bg-text-clr);
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

img,
picture,
svg {
  max-width: 100%;
  aspect-ratio: 1;
  width: 100%;
}

form,
input,
label,
button,
textarea {
  font: inherit;
}

li:not([type="list"]) {
  list-style-type: none;
}

a:not([class="underline"]) {
  text-decoration: none;
}

main {
  margin-block-start: 1em;
  scroll-margin-block-start: 1em;
}


section{
    &:not(:last-child) {
    margin-block-end: 1em;
  }
}

`;
export default GlobalStyle;
