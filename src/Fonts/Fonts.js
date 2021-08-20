import { createGlobalStyle } from 'styled-components';

import PacificoWoff from './Pacifico.woff';
import PacificoWoff2 from './Pacifico.woff2';
import PoppinsWoff from './Poppins.woff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Pacifico';
        src: local('Pacifico'),
        url(${PacificoWoff}) format('woff'),
        url(${PacificoWoff2}) format('woff2');
    }

    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'),
        url(${PoppinsWoff}) format('woff');
    }
`;