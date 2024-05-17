// frontend/src/service.js
import axios from 'axios';

const API_URL = 'http://localhost:5000';

const addMark = async (mark) => {
    try {
        const response = await axios.post(`${API_URL}/marks/add`, mark);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const getAllMarks = async () => {
    try {
        const response = await axios.get(`${API_URL}/marks`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { addMark, getAllMarks };
