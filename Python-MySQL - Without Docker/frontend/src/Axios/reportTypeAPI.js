import API from "./API";

export default class reportTypeAPI {
    // Metody GET
    async get() {
        const response = await API.get("/report_type");

        return response;
    }

    async getByID(id) {
        const response = await API.get("/report_type/" + id);

        return response;
    }
}