import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle `

html {
    margin: auto;
}

body {
    font-family: 'Be Vietnam Pro', sans-serif;
    max-width: 1920px;
    background-color: #272728;
    margin: 0;
}

`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle