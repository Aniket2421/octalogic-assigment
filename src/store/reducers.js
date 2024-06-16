const initialState = {
    courses: [],
    students: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD_DATA':
            return {
                ...state,
                courses: action.payload.courses,
                students: action.payload.students,
            };
        default:
            return state;
    }
};

export default rootReducer;
