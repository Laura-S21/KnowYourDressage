import {createGlobalStyle} from 'styled-components'

const StyledGlobalStyle = createGlobalStyle `

html {
    margin: auto;
    max-width: 100vw;
}
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle