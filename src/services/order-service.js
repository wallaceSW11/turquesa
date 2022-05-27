// import api from "./api";

const orders = [
    {
        id: 1,
        imageId: "photo0.jpg",
        client: "Dona Bela",
        status: "Aguardando aprovação",
        deadline: "03/06/2022 13:00",
    },
    {
        id: 2,
        imageId: "photo1.jpg",
        client: "Juma Marruá",
        status: "Aprovado",
        deadline: "16/06/2022 13:30",
    },
    {
        id: 3,
        imageId: "photo2.jpg",
        client: "Petita Bown",
        status: "Não aceito",
        deadline: "22/07/2022 18:30",
    },
    {
        id: 4,
        imageId: "photo3.jpg",
        client: "Maria Belina",
        status: "Aprovado",
        deadline: "15/07/2022 18:30",
    },
    {
        id: 5,
        imageId: "photo4.jpg",
        client: "Bina Trella",
        status: "Aguardando aprovação",
        deadline: "30/07/2022 13:30",
    },
    {
        id: 6,
        imageId: "photo5.jpg",
        client: "Constantino",
        status: "Aguardando aprovação",
        deadline: "28/07/2022 13:30",
    },
];

function getAll() {
    return orders;
}

function getById(id) {
    return orders.find((o) => o.id === id);
}

// function saveEnterprise(enterprise) {
//     return new Promise((resolve, reject) => {
//         return api
//             .put(`/enterprise/${enterprise.id}`, enterprise)
//             .then((response) => resolve(response))
//             .catch((error) => reject(error));
//     });
// }

// function createEnterprise(enterprise) {
//     return new Promise((resolve, reject) => {
//         return api
//             .post(`/enterprise`, enterprise)
//             .then((response) => resolve(response))
//             .catch((error) => {
//                 if (error.response.status == 409) {
//                     reject(error.response.data.message);
//                 } else {
//                     reject(JSON.stringify(error.response.data.errors));
//                 }
//             });
//     });
// }

// function deleteEnterprise(id) {
//     return new Promise((resolve, reject) => {
//         return api
//             .delete(`/enterprise/${id}`)
//             .then((response) => resolve(response))
//             .catch((error) => reject(error));
//     });
// }

export default {
    getAll,
    getById,
    // saveEnterprise,
    // createEnterprise,
    // deleteEnterprise,
};
