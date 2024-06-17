import axios from 'axios';

export const loadMockData = () => async (dispatch) => {
    const localData = localStorage.getItem('musicSchoolData');
    let localDataParsed = null;

    if (localData) {
        localDataParsed = JSON.parse(localData);
    }

    const response = await axios.get('/src/mock-data.json');
    const data = response.data;

    if (!localDataParsed || JSON.stringify(localDataParsed) !== JSON.stringify(data)) {
        localStorage.setItem('musicSchoolData', JSON.stringify(data));
        dispatch({ type: 'LOAD_DATA', payload: data });
    } else {
        dispatch({ type: 'LOAD_DATA', payload: localDataParsed });
    }
};

export const updateLocalStorage = (store) => {
    store.subscribe(() => {
        localStorage.setItem('musicSchoolData', JSON.stringify(store.getState()));
    });
};
