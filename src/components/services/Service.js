import axios from "axios";
import { URLS } from "../../Urls";

const checkError = (response) => {
    if (response.error) {
        throw new Error(response.message);
    }
};

const Service = {
    login: async (payload) => {
        const url = URLS.baseUrl + URLS.login;
        const response = (await axios.post(url, payload)).data;
        checkError(response);
        return response;
    },
    register: async (payload) => {
        const url = URLS.baseUrl + URLS.register;
        const response = (await axios.post(url, payload)).data;
        checkError(response);
        return response;
    },

};

export default Service;