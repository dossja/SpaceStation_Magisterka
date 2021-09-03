import API from "./API";

export default class reportTypeAPI {
    // Metody GET
    async get() {
        const response = await API.get("/report_type");

        return response;
    }
}