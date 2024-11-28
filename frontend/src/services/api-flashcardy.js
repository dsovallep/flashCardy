import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const getCategories = () => {
    try {
        return axios.get(`${API_BASE_URL}/categories/`)
    }
    catch (error) {
        console.error(error)
    }
}

export const getCards = () => {
    try {
        return axios.get(`${API_BASE_URL}/cards/`)
    }
    catch (error) {
        console.error(error)
    }
}

export const getTags = () => {
    try{
        return axios.get(`${API_BASE_URL}/tags/`)
    }
    catch (error) {
        console.error(error)
    }
}

export const getCardTags = () => {
    try{
        return axios.get(`${API_BASE_URL}/cardtags/`)
    }
    catch (error) {
        console.error(error)
    }
}