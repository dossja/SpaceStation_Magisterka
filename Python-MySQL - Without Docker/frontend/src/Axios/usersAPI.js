import API from "./API";

export default class usersAPI {
    // Metody GET
    async get() {
        const response = await API.get("/users");

        return response;
    }

    async getByEmail(email) {
        const response = await API.post('/users/login', email);

        return response;
    }

    async getByID(id) {
        const response = await API.post('/users/' + id);

        return response;
    }

    // Metody POST
    async post(values) {
        const response = await API.post("/users/signup", values);

        return response;
    }
}