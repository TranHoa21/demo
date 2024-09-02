export const saveBooking = (bookingData) => {
    return {
        type: 'SAVE_BOOKING',
        payload: bookingData,
    };
}