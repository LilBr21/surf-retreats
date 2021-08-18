import DecorationWave from './DecorationWave';

import './Bookings.styles.css';

const Bookings = () => {
    return (
        <div id="bookings" className="bookings">
            <DecorationWave />
            <h2 className="bookings-title">Bookings:</h2>
            <p className="bookings-description">
                If you would like to book one of our retreats please use the 
                form below. We'll message you as soon as possible. If you 
                have any questions also please feel free to message us. 
            </p>
        </div>

    )
}

export default Bookings;