import styled from 'styled-components';

const StyledSources = styled.div`
    display: flex;
    flex-direction: column;
    background: #184b4e;
    justify-content: center;
    align-items: center;

    & div {
        display: flex;
        flex-direction: row;

        & p, a {
            color: #fff;
            font-size: 12px;
            margin-top: 0.25rem;
            padding: 0.25rem;
        }
    }
`;

const Sources = () => {
    return (
        <StyledSources>
            <div>
                <p>Icons source:</p>
                <a href="https://icons8.com/">icons8</a>
            </div>
            <div>
                <p>Pictures source:</p>
                <a href="https://unsplash.com/">Unsplash</a>
            </div>
        </StyledSources>
    );
};

export default Sources;