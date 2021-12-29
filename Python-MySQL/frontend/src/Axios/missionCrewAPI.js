import API from "./API";

export default class incidentsAPI {
    // Metody GET
    async get() {
        const response = await API.get("/mission_crew");

        return response;
    }


    // Metody POST
    async post(values) {
        const response = await API.post("/mission_crew/add", values);

        return response;
    }
}