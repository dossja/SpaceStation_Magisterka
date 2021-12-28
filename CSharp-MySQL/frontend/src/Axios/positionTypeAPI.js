import API from "./API";

export default class positionTypeAPI {
    // Metody GET
    async get() {
        const response = await API.get("/positionType");

        return response;
    }
}