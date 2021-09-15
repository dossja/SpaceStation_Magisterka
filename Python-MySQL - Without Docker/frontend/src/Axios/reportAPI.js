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
        console.log(values);
        const response = await API.post("/reports/add", values);

        return response;
    }

    // Metody PUT
    async putByID(id, values) {
        const response = await API.put("/users/update/" + id, values);

        return response;
    }
}