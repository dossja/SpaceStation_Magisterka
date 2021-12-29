import API from "./API";

export default class incidentsAPI {
    // Metody GET
    async get() {
        const response = await API.get("/incidents");

        return response;
    }


    // Metody POST
    async post(values) {
        const response = await API.post("/incidents/add", values);

        return response;
    }
}