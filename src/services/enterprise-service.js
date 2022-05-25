import api from "./api";

function getAll() {
    return new Promise((resolve, reject) => {
        return api
            .get("enterprise")
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function getById(id) {
    return new Promise((resolve, reject) => {
        return api
            .get(`/enterprise/${id}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function saveEnterprise(enterprise) {
    return new Promise((resolve, reject) => {
        return api
            .put(`/enterprise/${enterprise.id}`, enterprise)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

function createEnterprise(enterprise) {
    return new Promise((resolve, reject) => {
        return api
            .post(`/enterprise`, enterprise)
            .then((response) => resolve(response))
            .catch((error) => {
                if (error.response.status == 409) {
                    reject(error.response.data.message)
                } else {reject(JSON.stringify(error.response.data.errors))
                }
            });
    });
}

function deleteEnterprise(id) {
    return new Promise((resolve, reject) => {
        return api
            .delete(`/enterprise/${id}`)
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    });
}

export default {
    getAll,
    getById,
    saveEnterprise,
    createEnterprise,
    deleteEnterprise
};
