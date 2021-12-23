import API from "./API";

export default class reportTypeAPI {
    // Metody GET
    async get() {
        const response = await API.get("/reportType");

        return response;
    }

    async getByID(id) {
        const response = await API.get("/reportType/" + id);

        return response;
    }
}