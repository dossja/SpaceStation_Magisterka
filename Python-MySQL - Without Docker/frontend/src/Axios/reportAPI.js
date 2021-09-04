import API from "./API";

export default class reportAPI {
    // Metody GET
    async get() {
        const response = await API.get("/reports");

        return response;
    }

    async getByID(id) {
        const response = await API.get("/reports/" + id);

        return response;
    }

    // Metody POST
    async post(values) {
        const response = await API.post("/reports/add", values);

        return response;
    }
}