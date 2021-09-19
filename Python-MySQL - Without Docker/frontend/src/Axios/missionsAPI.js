import API from "./API";

export default class missionsAPI {
    // Metody GET
    async get() {
        const response = await API.get("/missions");

        return response;
    }


    async getCrewByID(id) {
        const response = await API.get("/missions/" + id + "/crew");

        return response;
    }

    // Metody POST
    async post(values) {
        const response = await API.post("/missions/add");

        return response;
    }
}