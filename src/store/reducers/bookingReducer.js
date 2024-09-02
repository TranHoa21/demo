// Không cần import `BookingState` từ TypeScript trong phiên bản JavaScript

// Loại bỏ khai báo interface, chỉ sử dụng đối tượng JavaScript
const initialState = {
    email: '',
    name: '',
    phonenumber: '',
    tour_id: '',
    price: '',
    start_day: '',
    tour: '',
    people: ''
};

// Hàm giảm thiểu đặt chỗ (Booking Reducer)
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_BOOKING':
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                phonenumber: action.payload.phonenumber,
                tour_id: action.payload.tour_id,
                price: action.payload.price,
                start_day: action.payload.start_day,
                tour: action.payload.tour,
                people: action.payload.people
            };
        default:
            return state;
    }
};

export default bookingReducer;
