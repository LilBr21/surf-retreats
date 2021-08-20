import styled from 'styled-components';

import {ReactComponent as BreakIcon} from '../assets/break-icon.svg';

// import './DecorationWave.styles.css';

const StyledWave = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    margin-top: 3rem;
`;

const DecorationWave = () => {
    return (
        <StyledWave>
                <BreakIcon />
                <BreakIcon />
        </StyledWave>
    )
}

export default DecorationWave;