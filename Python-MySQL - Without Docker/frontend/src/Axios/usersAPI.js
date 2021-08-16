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
}