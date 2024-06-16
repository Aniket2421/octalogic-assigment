import axios from 'axios';

export const loadMockData = () => async (dispatch) => {
    const localData = localStorage.getItem('musicSchoolData');
    if (localData) {
        dispatch({ type: 'LOAD_DATA', payload: JSON.parse(localData) });
    } else {
        const response = await axios.get('/src/mock-data.json');
        const data = response.data;
        localStorage.setItem('musicSchoolData', JSON.stringify(data));
        dispatch({ type: 'LOAD_DATA', payload: data });
    }
};

export const updateLocalStorage = (store) => {
    store.subscribe(() => {
        localStorage.setItem('musicSchoolData', JSON.stringify(store.getState()));
    });
};
