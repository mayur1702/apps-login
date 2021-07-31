import axios from "axios";
import { URLS } from "../../Urls";

const Service = {
    login: async (payload) => {
        const url = URLS.baseUrl + URLS.login;
        return (await axios.post(url, payload)).data;
    },
    register: async (payload) => {
        const url = URLS.baseUrl + URLS.register;
        return (await axios.post(url, payload)).data;
    },

};

export default Service;