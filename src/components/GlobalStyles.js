import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
    *{
        box-sizing: border-box;
        padding: 0;
        margin:0;
        background-color: red;
    }
`;

export default GlobalStyles;
