import styled from 'styled-components';

import DecorationWave from './DecorationWave';

const StyledBookings = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h2 {
        font-family: 'Poppins';
    }

    & p {
        width: 50%;
        font-size: 20px;
        text-align: center;

        @media (max-width: 480px) {
            width: 70%;
        }
    }
`;

const Bookings = () => {
    return (
        <StyledBookings id="bookings">
            <DecorationWave />
            <h2>Bookings:</h2>
            <p>
                If you would like to book one of our retreats please use the 
                form below. We'll message you as soon as possible. If you 
                have any questions also please feel free to message us. 
            </p>
        </StyledBookings>

    )
}

export default Bookings;